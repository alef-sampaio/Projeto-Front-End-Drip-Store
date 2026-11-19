import { Link } from 'react-router-dom'
import Layout from './Layout'

export default function AuthPage({ mode }) {
  const signup = mode === 'signup'
  return (
    <Layout>
      <div className="container info-page">
        <h1>{signup ? 'Criar conta' : 'Entrar'}</h1>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {signup && <input placeholder="Nome completo" required />}
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button className="btn-primary" type="submit">{signup ? 'Cadastrar' : 'Entrar'}</button>
          <Link to={signup ? '/login' : '/signup'}>{signup ? 'Já tenho conta' : 'Criar conta'}</Link>
        </form>
      </div>
    </Layout>
  )
}