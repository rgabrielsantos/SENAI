import { useState, useMemo, useEffect } from 'react' // ✨ NOVO: adicionado useState, useMemo e useEffect
import { type Produto } from '../types/Produto'

interface Props {
  produtos: Produto[]
  loading: boolean
  onEditar: (produto: Produto) => void
  onExcluir: (id: number) => void
}

function ProdutoList({
  produtos,
  loading,
  onEditar,
  onExcluir,
}: Props) {

  // ✨ NOVO: Estados da paginação
  const [paginaAtual, setPaginaAtual] = useState(1)
  const itensPorPagina = 5

  // ✨ NOVO: Calcula o total de páginas
  const totalPaginas = Math.ceil(produtos.length / itensPorPagina)

  // ✨ NOVO: Fatia o array para mostrar apenas os itens da página atual
  const produtosVisiveis = useMemo(() => {
    const indiceInicial = (paginaAtual - 1) * itensPorPagina
    const indiceFinal = indiceInicial + itensPorPagina
    return produtos.slice(indiceInicial, indiceFinal)
  }, [produtos, paginaAtual])

  // ✨ NOVO: Se a lista de produtos mudar (criar/deletar),
  // volta para a página 1 para evitar página vazia
  useEffect(() => {
    setPaginaAtual(1)
  }, [produtos.length])

  if (loading) {
    return (
      <div className="list-state">
        Carregando produtos...
      </div>
    )
  }

  if (produtos.length === 0) {
    return (
      <div className="data-card">

        <div className="data-card-header">
          <div>
            <h2>Produtos cadastrados</h2>

            <span>
              0 produtos
            </span>
          </div>
        </div>

        <div className="list-state-inside">
          Nenhum produto cadastrado ainda.
        </div>

      </div>
    )
  }

  return (
    <div className="data-card">

      {/* CABEÇALHO */}

      <div className="data-card-header">

        <div>

          <h2>
            Produtos cadastrados
          </h2>

          {/* ✨ MANTIDO: Mostra o total real de produtos (não só os visíveis) */}
          <span>
            {produtos.length}{' '}
            {produtos.length === 1
              ? 'produto'
              : 'produtos'}
          </span>

        </div>

      </div>


      {/* TABELA */}

      <div className="produto-table">

        {/* CABEÇALHO DA TABELA */}

        <div className="produto-table-header">

          <div>
            PRODUTO
          </div>

          <div>
            PREÇO
          </div>

          <div>
            ESTOQUE
          </div>

          <div>
            AÇÕES
          </div>

        </div>


        {/* LINHAS */}

        {/* ✨ MUDANÇA: produtos.map → produtosVisiveis.map */}
        {produtosVisiveis.map((produto) => (

          <div
            className="produto-table-row"
            key={produto.id}
          >

            {/* PRODUTO */}

            <div className="produto-name">

              <strong>
                {produto.nome}
              </strong>

            </div>


            {/* PREÇO */}

            <div>
              R${' '}
              {produto.preco
                .toFixed(2)
                .replace('.', ',')}
            </div>


            {/* ESTOQUE */}

            <div>
              {produto.estoque}
            </div>


            {/* AÇÕES */}

            <div className="produto-actions">

              <button
                type="button"
                className="action-btn btn-edit"
                onClick={() => onEditar(produto)}
                title="Editar produto"
                aria-label={`Editar ${produto.nome}`}
              >

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >

                  <path
                    d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  />

                  <path
                    d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1-4-1 1-4 9.5-9.5z"
                  />

                </svg>

                <span>
                  Editar
                </span>

              </button>


              <button
                type="button"
                className="action-btn btn-delete"
                onClick={() => {

                  const confirmar = window.confirm(
                    `Tem certeza que deseja excluir "${produto.nome}"?`
                  )

                  if (confirmar) {
                    onExcluir(produto.id)
                  }

                }}
                title="Excluir produto"
                aria-label={`Excluir ${produto.nome}`}
              >

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >

                  <polyline
                    points="3 6 5 6 21 6"
                  />

                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
                  />

                  <path
                    d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  />

                </svg>

                <span>
                  Excluir
                </span>

              </button>

            </div>

          </div>

        ))}

      </div>


      {/* ✨ NOVO: CONTROLES DE PAGINAÇÃO */}

      {totalPaginas > 1 && (

        <div className="paginacao">

          <button
            type="button"
            className="paginacao-btn"
            onClick={() => setPaginaAtual(paginaAtual - 1)}
            disabled={paginaAtual === 1}
          >
            ← Anterior
          </button>

          <span className="paginacao-info">
            Página {paginaAtual} de {totalPaginas}
          </span>

          <button
            type="button"
            className="paginacao-btn"
            onClick={() => setPaginaAtual(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
          >
            Próxima →
          </button>

        </div>

      )}

    </div>
  )
}

export default ProdutoList
