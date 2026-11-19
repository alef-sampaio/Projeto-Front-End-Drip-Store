import { Link } from 'react-router-dom'
import Layout from './Layout'
import Section from '../components/Section'
import CategoryIcon from '../components/CategoryIcon'

const cats = ['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis']

export default function CategoriesPage() {
  return (
    <Layout>
      <div className="container">
        <Section title="Categorias" titleAlign="center">
          <div className="cats">
            {cats.map((c) => (
              <Link to="/products" key={c}>
                <span className="circle"><CategoryIcon name={c} /></span>{c}
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  )
}