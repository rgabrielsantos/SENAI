import {
  useMemo,
  useState,
} from 'react'

import type { Produto } from '../types/Produto'
import type { Cliente } from '../types/Cliente'
import { vendaService } from '../services/VendaService'

interface ItemVenda {
  produto: Produto
  quantidade: number
}

interface VendaFormProps {
  produtos: Produto[]
  clientes: Cliente[]
  onVendaCriada: () => void | Promise<void>
}

function formatarMoeda(valor: number) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function VendaForm({
  produtos,
  clientes,
  onVendaCriada,
}: VendaFormProps) {
  const [clienteSelecionado, setClienteSelecionado] =
    useState<number | ''>('')

  const [produtoSelecionado, setProdutoSelecionado] =
    useState<number | ''>('')

  const [quantidade, setQuantidade] =
    useState(1)

  const [itens, setItens] =
    useState<ItemVenda[]>([])

  const [loading, setLoading] =
    useState(false)

  const [erro, setErro] =
    useState<string | null>(null)

  const [sucesso, setSucesso] =
    useState<string | null>(null)

  const total = useMemo(() => {
    return itens.reduce(
      (total, item) => {
        return (
          total +
          Number(item.produto.preco) *
            item.quantidade
        )
      },
      0
    )
  }, [itens])

  const adicionarItem = () => {
    setErro(null)
    setSucesso(null)

    if (clienteSelecionado === '') {
      setErro('Selecione um cliente.')
      return
    }

    if (produtoSelecionado === '') {
      setErro('Selecione um produto.')
      return
    }

    if (quantidade <= 0) {
      setErro('Informe uma quantidade válida.')
      return
    }

    const produto = produtos.find(
      (item) =>
        item.id === produtoSelecionado
    )

    if (!produto) {
      setErro('Produto não encontrado.')
      return
    }

    const itemExistente = itens.find(
      (item) =>
        item.produto.id === produto.id
    )

    const quantidadeAtual =
      itemExistente?.quantidade ?? 0

    const quantidadeFinal =
      quantidadeAtual + quantidade

    if (
      quantidadeFinal >
      produto.estoque
    ) {
      setErro(
        `Estoque insuficiente. Disponível: ${produto.estoque}.`
      )
      return
    }

    if (itemExistente) {
      setItens(
        itens.map((item) => {
          if (
            item.produto.id === produto.id
          ) {
            return {
              ...item,
              quantidade:
                item.quantidade +
                quantidade,
            }
          }

          return item
        })
      )
    } else {
      setItens([
        ...itens,
        {
          produto,
          quantidade,
        },
      ])
    }

    setProdutoSelecionado('')
    setQuantidade(1)
  }

  const removerItem = (
    produtoId: number
  ) => {
    setItens(
      itens.filter(
        (item) =>
          item.produto.id !== produtoId
      )
    )
  }

  const finalizarVenda = async () => {
    setErro(null)
    setSucesso(null)

    if (clienteSelecionado === '') {
      setErro('Selecione um cliente.')
      return
    }

    if (itens.length === 0) {
      setErro(
        'Adicione pelo menos um produto.'
      )
      return
    }

    try {
      setLoading(true)

      for (const item of itens) {
        await vendaService.criar({
          id_cliente:
            clienteSelecionado,
          id_produto:
            item.produto.id,
          quantidade:
            item.quantidade,
        })
      }

      setItens([])
      setClienteSelecionado('')
      setProdutoSelecionado('')
      setQuantidade(1)

      await onVendaCriada()

      setSucesso(
        'Venda realizada com sucesso!'
      )
    } catch {
      setErro(
        'Erro ao finalizar a venda. Tente novamente.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      className="venda-form"
      onSubmit={(event) => {
        event.preventDefault()
        finalizarVenda()
      }}
    >
      <div className="form-header">
        <div className="form-icon">
          +
        </div>

        <div>
          <h2>Registrar venda</h2>

          <p>
            Selecione o cliente, os produtos
            e a quantidade da venda.
          </p>
        </div>
      </div>

      {erro && (
        <div className="form-error">
          {erro}
        </div>
      )}

      {sucesso && (
        <div className="form-success">
          {sucesso}
        </div>
      )}

      <div className="form-fields">

        <div className="form-field">
          <label htmlFor="cliente">
            Cliente
          </label>

          <select
            id="cliente"
            value={clienteSelecionado}
            onChange={(event) =>
              setClienteSelecionado(
                event.target.value
                  ? Number(event.target.value)
                  : ''
              )
            }
            disabled={loading}
          >
            <option value="">
              Selecione um cliente
            </option>

            {clientes.map((cliente) => (
              <option
                key={cliente.id}
                value={cliente.id}
              >
                {cliente.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="produto">
            Produto
          </label>

          <select
            id="produto"
            value={produtoSelecionado}
            onChange={(event) =>
              setProdutoSelecionado(
                event.target.value
                  ? Number(event.target.value)
                  : ''
              )
            }
            disabled={loading}
          >
            <option value="">
              Selecione um produto
            </option>

            {produtos
              .filter(
                (produto) =>
                  produto.estoque > 0
              )
              .map((produto) => (
                <option
                  key={produto.id}
                  value={produto.id}
                >
                  {produto.nome}
                  {' — '}
                  {formatarMoeda(
                    Number(produto.preco)
                  )}
                  {' — estoque: '}
                  {produto.estoque}
                </option>
              ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="quantidade">
            Quantidade
          </label>

          <input
            id="quantidade"
            type="number"
            min="1"
            step="1"
            value={quantidade}
            onChange={(event) =>
              setQuantidade(
                Number(event.target.value)
              )
            }
            disabled={loading}
          />
        </div>

      </div>

      <div className="form-footer">
        <button
          type="button"
          className="btn-add-item"
          onClick={adicionarItem}
          disabled={loading}
        >
          + Adicionar produto
        </button>
      </div>

      {itens.length > 0 && (
        <div className="venda-itens">

          <div className="venda-itens-header">
            <span>Produto</span>
            <span>Quantidade</span>
            <span>Preço</span>
            <span>Subtotal</span>
            <span>Ações</span>
          </div>

          {itens.map((item) => {
            const subtotal =
              Number(item.produto.preco) *
              item.quantidade

            return (
              <div
                className="venda-item"
                key={item.produto.id}
              >
                <div className="venda-produto">
                  <strong>
                    {item.produto.nome}
                  </strong>
                </div>

                <span>
                  {item.quantidade}
                </span>

                <span>
                  {formatarMoeda(
                    Number(item.produto.preco)
                  )}
                </span>

                <strong>
                  {formatarMoeda(subtotal)}
                </strong>

                <button
                  type="button"
                  className="btn-remove-item"
                  onClick={() =>
                    removerItem(
                      item.produto.id
                    )
                  }
                  disabled={loading}
                >
                  Remover
                </button>
              </div>
            )
          })}

        </div>
      )}

      <div className="form-footer venda-footer">

        <div className="venda-total">
          <span>
            Total da venda
          </span>

          <strong>
            {formatarMoeda(total)}
          </strong>
        </div>

        <button
          type="submit"
          disabled={
            loading ||
            itens.length === 0 ||
            clienteSelecionado === ''
          }
        >
          {loading
            ? 'Finalizando...'
            : 'Finalizar venda'}
        </button>

      </div>
    </form>
  )
}

export default VendaForm
