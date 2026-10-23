import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Sidebar() {
  const { user, logout } = useAuth()

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <h1>MinhaApp</h1>
        <span>Gestão empresarial</span>
      </div>

      <nav className="sidebar-nav">

        <NavLink
          to="/produtos"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">📦</span>
          <span>Produtos</span>
        </NavLink>

        <NavLink
          to="/vendas"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">🛒</span>
          <span>Vendas</span>
        </NavLink>

        <NavLink
          to="/clientes"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">👤</span>
          <span>Clientes</span>
        </NavLink>

        <NavLink
          to="/funcionario"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">👥</span>
          <span>Funcionários</span>
        </NavLink>

      </nav>

      <div className="sidebar-account">
        <p className="sidebar-user">👤 {user?.nome || 'Usuário'}</p>
        <button className="sidebar-logout" type="button" onClick={logout}>
          <span aria-hidden="true">↪</span>
          <span>Sair</span>
        </button>
      </div>

    </aside>
  )
}

export default Sidebar
