import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  const search = () => navigate(`/products?filter=${encodeURIComponent(term.trim())}`)
  return (
    <header className="header">
      <div className="container header-top">
        <Link to="/"><Logo /></Link>
        <div className="search">
          <input value={term} placeholder="Pesquisar produto..." onChange={(e) => setTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && search()} />
          <button onClick={search} aria-label="Buscar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8F8F8F" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
          </button>
        </div>
        <div className="auth">
          <Link to="/signup" className="signup">Cadastre-se</Link>
          <Link to="/login" className="btn-enter">Entrar</Link>
          <span className="cart" aria-label="Carrinho">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="1.8"><path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.4a1 1 0 0 0 1-.8L19.5 8H6" /><circle cx="9" cy="19" r="1.3" /><circle cx="17" cy="19" r="1.3" /></svg>
            <b>2</b>
          </span>
        </div>
      </div>
      <nav className="container nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/categories">Categorias</NavLink>
        <NavLink to="/orders">Meus Pedidos</NavLink>
      </nav>
    </header>
  )
}
