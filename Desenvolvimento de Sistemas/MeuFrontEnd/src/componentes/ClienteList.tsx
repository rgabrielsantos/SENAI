import { type Cliente } from '../types/Cliente'

interface Props {
  clientes: Cliente[]
  loading: boolean
}

function ClienteList({ clientes, loading }: Props) {
  if (loading) {
    return (
      <div className="list-state">
        Carregando clientes...
      </div>
    )
  }

  return (
    <div className="data-card">

      {/* Cabeçalho da lista */}
      <div className="data-card-header">
        <div>
          <h2>Clientes cadastrados</h2>

          <span>
            {clientes.length}{' '}
            {clientes.length === 1 ? 'cliente' : 'clientes'}
          </span>
        </div>
      </div>

      {clientes.length === 0 ? (
        <div className="list-state-inside">
          Nenhum cliente cadastrado ainda.
        </div>
      ) : (
        <div className="clients-table-wrapper">
          <table className="clients-table">

            <thead>
              <tr>
                <th>CLIENTE</th>
                <th>E-MAIL</th>
                <th>CPF</th>
                <th>AÇÕES</th>
              </tr>
            </thead>

            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>

                  {/* Cliente */}
                  <td className="client-name-cell">
                    <strong>
                      {cliente.nome}
                    </strong>
                  </td>

                  {/* E-mail */}
                  <td className="client-email-cell">
                    {cliente.email}
                  </td>

                  {/* CPF */}
                  <td className="client-cpf-cell">
                    {cliente.cpf || '—'}
                  </td>

                  {/* Ações */}
                  <td className="client-actions-cell">

                    <button
                      type="button"
                      className="action-btn btn-edit"
                      title="Editar cliente"
                      aria-label={`Editar ${cliente.nome}`}
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
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />

                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1-4 1 1-4 9.5-9.5z" />
                      </svg>

                      <span>
                        Editar
                      </span>
                    </button>

                    <button
                      type="button"
                      className="action-btn btn-delete"
                      title="Excluir cliente"
                      aria-label={`Excluir ${cliente.nome}`}
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
                        <polyline points="3 6 5 6 21 6" />

                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />

                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>

                      <span>
                        Excluir
                      </span>
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  )
}

export default ClienteList
