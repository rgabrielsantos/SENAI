import type { Venda } from '../types/Venda'

interface VendaListProps {
  vendas: Venda[]
  loading: boolean
}

function formatarMoeda(valor: number) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function formatarData(data: string) {
  if (!data) {
    return '-'
  }

  const dataFormatada = new Date(data)

  if (Number.isNaN(dataFormatada.getTime())) {
    return '-'
  }

  return dataFormatada.toLocaleDateString(
    'pt-BR'
  )
}

function VendaList({
  vendas,
  loading,
}: VendaListProps) {
  if (loading) {
    return (
      <div className="venda-list-state">
        <span>
          Carregando vendas...
        </span>
      </div>
    )
  }

  if (vendas.length === 0) {
    return (
      <div className="venda-list-state">
        <strong>
          Nenhuma venda registrada
        </strong>

        <span>
          As vendas realizadas aparecerão aqui.
        </span>
      </div>
    )
  }

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Data</th>
            <th>Produto</th>
            <th>Cliente</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {vendas.map((venda) => (
            <tr key={venda.id_venda}>
              <td>
                #{venda.id_venda}
              </td>

              <td>
                {formatarData(
                  venda.data_venda
                )}
              </td>

              <td>
                {venda.nomeProduto}
              </td>

              <td>
                {venda.nomeCliente}
              </td>

              <td>
                <span className="quantity-badge">
                  {venda.quantidade}
                </span>
              </td>

              <td>
                <strong>
                  {formatarMoeda(
                    Number(venda.valor_final)
                  )}
                </strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VendaList
