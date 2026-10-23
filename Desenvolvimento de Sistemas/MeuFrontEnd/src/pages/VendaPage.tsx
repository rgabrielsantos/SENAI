import { useEffect, useState } from 'react'
import VendaForm from '../componentes/VendaForm'
import VendaList from '../componentes/VendaList'
import { produtoService } from '../services/ProdutoService'
import { clienteService } from '../services/ClienteService'
import { vendaService } from '../services/VendaService'
import type { Produto } from '../types/Produto'
import type { Cliente } from '../types/Cliente'
import type { Venda } from '../types/Venda'

function VendaPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [vendas, setVendas] = useState<Venda[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  const carregarDados = async () => {
    try {
      setLoading(true)
      setErro(null)

      const [produtosData, clientesData, vendasData] =
        await Promise.all([
          produtoService.listar(),
          clienteService.listar(),
          vendaService.listar(),
        ])

      setProdutos(produtosData)
      setClientes(clientesData)
      setVendas(vendasData)
    } catch {
      setErro('Erro ao carregar os dados da venda.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    carregarDados()
  }, [])

  return (
    <main className="page">
      <div className="page-container">
        <header className="page-header">
          <div>
            <span className="section-label"></span>

            <h1>Gestão de vendas</h1>

            <p>
              Registre novas vendas e acompanhe o histórico
              de vendas realizadas.
            </p>
          </div>
        </header>

        {erro && (
          <div className="form-error">
            {erro}
          </div>
        )}

        <section className="card">
          <VendaForm
            produtos={produtos}
            clientes={clientes}
            onVendaCriada={carregarDados}
          />
        </section>

        <section className="card">
          <div className="data-card-header">
            <div>
              <h2>Vendas realizadas</h2>

              <span>
                {vendas.length}{' '}
                {vendas.length === 1
                  ? 'venda registrada'
                  : 'vendas registradas'}
              </span>
            </div>
          </div>

          <VendaList
            vendas={vendas}
            loading={loading}
          />
        </section>
      </div>
    </main>
  )
}

export default VendaPage
