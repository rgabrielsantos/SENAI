import {
  useEffect,
  useState,
  type FormEvent,
} from 'react'

import {
  clienteService,
} from '../services/ClienteService'

import {
  type Cliente,
  type NovoCliente,
} from '../types/Cliente'

interface Props {
  onClienteCriado: () => void
  clienteParaEditar?: Cliente | null
  onCancelarEdicao?: () => void
}

function ClienteForm({
  onClienteCriado,
  clienteParaEditar,
  onCancelarEdicao,
}: Props) {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')

  const [loading, setLoading] =
    useState(false)

  const [erro, setErro] =
    useState<string | null>(null)

  const isEdicao =
    !!clienteParaEditar

  // =====================================================
  // PREENCHER FORMULÁRIO
  // =====================================================

  useEffect(() => {

    if (clienteParaEditar) {

      setNome(clienteParaEditar.nome)
      setEmail(clienteParaEditar.email)
      setCpf(clienteParaEditar.cpf)

    } else {

      setNome('')
      setEmail('')
      setCpf('')

    }

    setErro(null)

  }, [clienteParaEditar])

  // =====================================================
  // SALVAR
  // =====================================================

  const handleSubmit = async (
    e: FormEvent
  ) => {

    e.preventDefault()

    setErro(null)

    if (!nome.trim()) {

      setErro(
        'Informe o nome do cliente.'
      )

      return
    }

    if (!email.trim()) {

      setErro(
        'Informe o e-mail do cliente.'
      )

      return
    }

    try {

      setLoading(true)

      const dados: NovoCliente = {
        nome: nome.trim(),
        email: email.trim(),
        cpf: cpf.trim(),
      }

      // EDITAR

      if (
        isEdicao &&
        clienteParaEditar
      ) {

        await clienteService.editar(
          clienteParaEditar.id,
          dados
        )

      }

      // CRIAR

      else {

        await clienteService.criar(
          dados
        )

      }

      // Limpar formulário

      setNome('')
      setEmail('')
      setCpf('')

      // Atualizar lista

      await onClienteCriado()

      // Sair do modo edição

      if (
        isEdicao &&
        onCancelarEdicao
      ) {

        onCancelarEdicao()

      }

    } catch {

      setErro(
        isEdicao
          ? 'Erro ao atualizar cliente. Tente novamente.'
          : 'Erro ao cadastrar cliente. Tente novamente.'
      )

    } finally {

      setLoading(false)

    }
  }

  // =====================================================
  // CANCELAR
  // =====================================================

  const handleCancelar = () => {

    setNome('')
    setEmail('')
    setCpf('')

    setErro(null)

    if (onCancelarEdicao) {
      onCancelarEdicao()
    }
  }

  // =====================================================
  // INTERFACE
  // =====================================================

  return (
    <form
      className="cliente-form"
      onSubmit={handleSubmit}
    >

      <div className="form-header">

        <div className="form-icon">
          {isEdicao ? '✎' : '+'}
        </div>

        <div>

          <h2>
            {isEdicao
              ? 'Editar cliente'
              : 'Novo cliente'}
          </h2>

          <p>
            {isEdicao
              ? 'Altere os dados do cliente selecionado.'
              : 'Preencha os dados para cadastrar um novo cliente.'}
          </p>

        </div>

      </div>

      {erro && (
        <div className="form-error">
          {erro}
        </div>
      )}

      <div className="form-fields">

        <div className="form-field">

          <label htmlFor="cliente-nome">
            Nome
          </label>

          <input
            id="cliente-nome"
            type="text"
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            }
            placeholder="Digite o nome completo"
            required
            disabled={loading}
          />

        </div>

        <div className="form-field">

          <label htmlFor="cliente-email">
            E-mail
          </label>

          <input
            id="cliente-email"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="cliente@email.com"
            required
            disabled={loading}
          />

        </div>

        <div className="form-field">

          <label htmlFor="cliente-cpf">
            CPF
          </label>

          <input
            id="cliente-cpf"
            type="text"
            value={cpf}
            onChange={(e) =>
              setCpf(e.target.value)
            }
            placeholder="000.000.000-00"
            disabled={loading}
          />

        </div>

      </div>

      <div className="form-footer">

        <button
          type="submit"
          disabled={loading}
        >

          {loading
            ? 'Salvando...'
            : isEdicao
              ? 'Salvar alterações'
              : 'Cadastrar cliente'}

        </button>

        {isEdicao && (

          <button
            type="button"
            className="btn-cancel"
            onClick={handleCancelar}
            disabled={loading}
          >
            Cancelar
          </button>

        )}

      </div>

    </form>
  )
}

export default ClienteForm
