import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Sidebar from './componentes/Sidebar'
import { AuthProvider, useAuth } from './context/AuthContext'
import ProtectedRoute from './context/ProtectedRoute'
import ClientesPage from './pages/ClientesPage'
import { FuncionarioPage } from './pages/FuncionarioPage'
import LoginPage from './pages/LoginPage'
import ProdutosPage from './pages/ProdutosPage'
import VendaPage from './pages/VendaPage'

function Layout() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="app-layout">
      {isAuthenticated && <Sidebar />}

      <main className="app-main">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/produtos" replace />} />
          <Route path="/produtos" element={
            <ProtectedRoute><ProdutosPage /></ProtectedRoute>
          } />
          <Route path="/clientes" element={
            <ProtectedRoute><ClientesPage /></ProtectedRoute>
          } />
          <Route path="/vendas" element={
            <ProtectedRoute><VendaPage /></ProtectedRoute>
          } />
          <Route path="/funcionario" element={
            <ProtectedRoute><FuncionarioPage /></ProtectedRoute>
          } />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
