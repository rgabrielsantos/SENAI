import { useEffect, useState, type FormEvent } from 'react'

import { produtoService } from '../services/ProdutoService'

import {
  type Produto,
  type NovoProduto,
} from '../types/Produto'

interface Props {
  onProdutoCriado: () => void
  produtoParaEditar?: Produto | null
  onCancelarEdicao?: () => void
}

function ProdutoForm({
  onProdutoCriado,
  produtoParaEditar,
  onCancelarEdicao,
}: Props) {

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [estoque, setEstoque] = useState('')

  const [loading, setLoading] = useState(false)

  const [erro, setErro] = useState<string | null>(null)

  const isEdicao = !!produtoParaEditar


  /*
   * Quando o usuário clicar em "Editar",
   * preenchemos o formulário com os dados do produto.
   */
  useEffect(() => {

    if (produtoParaEditar) {

      setNome(produtoParaEditar.nome)

      setPreco(
        produtoParaEditar.preco.toString()
      )

      setEstoque(
        produtoParaEditar.estoque.toString()
      )

    } else {

      setNome('')
      setPreco('')
      setEstoque('')

    }

    setErro(null)

  }, [produtoParaEditar])


  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault()

    setErro(null)

    try {

      setLoading(true)

      const dados: NovoProduto = {

        nome,

        preco: Number(preco),

        estoque: Number(estoque),

      }


      /*
       * EDIÇÃO
       */

      if (isEdicao && produtoParaEditar) {

        await produtoService.editar(
          produtoParaEditar.id,
          dados
        )

      }

      /*
       * CADASTRO
       */

      else {

        await produtoService.criar(dados)

      }


      /*
       * Limpa o formulário
       */

      setNome('')
      setPreco('')
      setEstoque('')


      /*
       * Atualiza a lista
       */

      await onProdutoCriado()


      /*
       * Sai do modo de edição
       */

      if (isEdicao && onCancelarEdicao) {

        onCancelarEdicao()

      }

    } catch {

      setErro(
        isEdicao
          ? 'Erro ao atualizar o produto. Tente novamente.'
          : 'Erro ao cadastrar o produto. Tente novamente.'
      )

    } finally {

      setLoading(false)

    }

  }


  return (

    <form
      className="produto-form"
      onSubmit={handleSubmit}
    >

      {/* CABEÇALHO */}

      <div className="form-header">

        <div className="form-icon">
          +
        </div>

        <div>

          <h2>
            {isEdicao
              ? 'Editar produto'
              : 'Cadastrar produto'}
          </h2>

          <p>
            {isEdicao
              ? 'Atualize os dados do produto.'
              : 'Preencha os dados para cadastrar um novo produto.'}
          </p>

        </div>

      </div>


      {/* ERRO */}

      {erro && (

        <div className="form-error">
          {erro}
        </div>

      )}


      {/* CAMPOS */}

      <div className="form-fields">


        {/* NOME */}

        <div className="form-field">

          <label htmlFor="nome">
            Nome
          </label>

          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            }
            placeholder="Ex: Mouse Sem Fio"
            required
          />

        </div>


        {/* PREÇO */}

        <div className="form-field">

          <label htmlFor="preco">
            Preço
          </label>

          <input
            id="preco"
            type="number"
            step="0.01"
            min="0"
            value={preco}
            onChange={(e) =>
              setPreco(e.target.value)
            }
            placeholder="0,00"
            required
          />

        </div>


        {/* ESTOQUE */}

        <div className="form-field">

          <label htmlFor="estoque">
            Estoque
          </label>

          <input
            id="estoque"
            type="number"
            min="0"
            step="1"
            value={estoque}
            onChange={(e) =>
              setEstoque(e.target.value)
            }
            placeholder="0"
            required
          />

        </div>

      </div>


      {/* RODAPÉ */}

      <div className="form-footer">

        {isEdicao && (

          <button
            type="button"
            className="btn-cancel"
            onClick={onCancelarEdicao}
            disabled={loading}
          >
            Cancelar
          </button>

        )}

        <button
          type="submit"
          disabled={loading}
        >

          {loading
            ? 'Salvando...'
            : isEdicao
              ? 'Salvar alterações'
              : 'Cadastrar produto'}

        </button>

      </div>

    </form>

  )
}

export default ProdutoForm
