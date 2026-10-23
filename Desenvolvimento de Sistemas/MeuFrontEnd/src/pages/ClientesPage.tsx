import { useEffect, useState } from 'react'

import { clienteService } from '../services/ClienteService'

import { type Cliente } from '../types/Cliente'

import ClienteForm from '../componentes/ClienteForm'

import ClienteList from '../componentes/ClienteList'


function ClientesPage() {

  const [clientes, setClientes] = useState<Cliente[]>([])

  const [loading, setLoading] = useState(false)

  const [erro, setErro] = useState<string | null>(null)


  const carregarClientes = async () => {

    try {

      setLoading(true)

      const dados = await clienteService.listar()

      setClientes(dados)

      setErro(null)

    } catch {

      setErro(
        'Erro ao carregar clientes.'
      )

    } finally {

      setLoading(false)

    }

  }


  useEffect(() => {

    carregarClientes()

  }, [])


  return (
    <div className="page">

      {/* CABEÇALHO */}

      <header className="page-header">

        <div>

          <h1>
            Gestão de Clientes
          </h1>

          <p>
            Cadastre, consulte e gerencie seus clientes.
          </p>

        </div>

      </header>


      {/* FORMULÁRIO */}

      <section className="card">

        <ClienteForm
          onClienteCriado={carregarClientes}
        />

      </section>


      {/* ERRO */}

      {erro && (
        <div className="error-message">
          {erro}
        </div>
      )}


      {/* LISTA */}

      <section className="list-section">

        <ClienteList
          clientes={clientes}
          loading={loading}
        />

      </section>

    </div>
  )
}


export default ClientesPage
