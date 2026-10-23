import { useEffect, useState } from 'react'

import { type Produto } from '../types/Produto'
import { produtoService } from '../services/ProdutoService'

import ProdutoForm from '../componentes/ProdutoForm'
import ProdutoList from '../componentes/ProdutoList'

function ProdutosPage() {

  const [produtos, setProdutos] = useState<Produto[]>([])

  const [loading, setLoading] = useState(false)

  const [erro, setErro] = useState<string | null>(null)

  const [produtoEmEdicao, setProdutoEmEdicao] =
    useState<Produto | null>(null)


  const carregarProdutos = async () => {

    try {

      setLoading(true)

      const dados = await produtoService.listar()

      setProdutos(dados)

      setErro(null)

    } catch {

      setErro('Erro ao carregar produtos.')

    } finally {

      setLoading(false)

    }

  }


  const handleExcluir = async (id: number) => {

    try {

      await produtoService.excluir(id)

      await carregarProdutos()

    } catch {

      setErro('Erro ao excluir o produto.')

    }

  }


  useEffect(() => {

    carregarProdutos()

  }, [])


  return (

    <div className="page">

      <header className="page-header">

        <h1>
          Gestão de Produtos
        </h1>

        <p>
          Cadastre, consulte e gerencie seus produtos.
        </p>

      </header>


      <section className="card">

        <ProdutoForm
          onProdutoCriado={carregarProdutos}
          produtoParaEditar={produtoEmEdicao}
          onCancelarEdicao={() =>
            setProdutoEmEdicao(null)
          }
        />

      </section>


      {erro && (

        <div className="error-message">
          {erro}
        </div>

      )}


      <ProdutoList
        produtos={produtos}
        loading={loading}
        onEditar={(produto) =>
          setProdutoEmEdicao(produto)
        }
        onExcluir={handleExcluir}
      />

    </div>

  )
}

export default ProdutosPage
