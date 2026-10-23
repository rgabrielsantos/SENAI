import axios from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { authService } from '../services/AuthService'

function LoginPage() {
  const [email, setEmail]     = useState('')
  const [senha, setSenha]     = useState('')
  const [loading, setLoading] = useState(false)
  const [erro, setErro]       = useState<string | null>(null)
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  // Já logado? Não precisa ver o login
  if (isAuthenticated) return <Navigate to="/produtos" replace />

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)
    try {
      setLoading(true)
      const resp = await authService.login({ email, senha })
      login(resp)
      navigate('/produtos')
    } catch (error) {
      if (axios.isAxiosError(error) && !error.response) {
        setErro('Não foi possível conectar à API. Verifique se o servidor está em execução.')
      } else if (axios.isAxiosError(error) && error.response?.status === 401) {
        setErro('E-mail ou senha incorretos.')
      } else {
        setErro('Ocorreu um erro ao tentar entrar. Tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <header className="login-header">
          <span className="login-mark" aria-hidden="true">M</span>
          <span className="login-brand">MinhaApp</span>
          <h1 id="login-title">Acesse sua conta</h1>
          <p>Gestão empresarial</p>
        </header>

        {erro && <p className="error-message login-error" role="alert">{erro}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              autoComplete="current-password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </section>
    </div>
  )
}
export default LoginPage
