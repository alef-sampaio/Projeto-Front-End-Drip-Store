import { Link } from 'react-router-dom'
import Layout from './Layout'

export default function InfoPage({ title, text }) {
  return (
    <Layout>
      <div className="container info-page">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to="/products" className="btn-primary">Ver produtos</Link>
      </div>
    </Layout>
  )
}