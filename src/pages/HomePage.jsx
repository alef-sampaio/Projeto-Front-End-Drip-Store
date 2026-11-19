import { Link } from 'react-router-dom'
import Layout from './Layout'
import CategoryIcon from '../components/CategoryIcon'
import Gallery from '../components/Gallery'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import { products } from '../data/products'

const slides = [1, 2, 3, 4].map((n) => ({ src: `/home-slide-${n}.jpeg` }))
const collections = [{ n: 1, title: 'Novo drop Supreme' }, { n: 2, title: 'Coleção Adidas' }, { n: 3, title: 'Novo Beats Bass' }]
const cats = ['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis']

export default function HomePage() {
  return (
    <Layout>
      <div className="hero-wrap">
        <Gallery images={slides} width="1440" height="681" className="hero" />
        <div className="hero-text">
          <small>Melhores ofertas personalizadas</small>
          <h1>Queima de stoque Nike</h1>
          <p>Tênis das melhores marcas com até 30% de desconto. Aproveite enquanto durar o estoque.</p>
          <Link to="/products" className="btn-primary">Ver Ofertas</Link>
        </div>
      </div>
      <div className="container">
        <Section title="Coleções em destaque">
          <div className="collections">
            {collections.map((c) => (
              <div key={c.n} className="col-card" style={{ backgroundImage: `url(/collection-${c.n}.png)` }}>
                <span className="tag-static">30% OFF</span>
                <h3>{c.title}</h3>
                <Link to="/products" className="btn-white">Comprar</Link>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Categorias em destaque" titleAlign="center">
          <div className="cats">{cats.map((c) => <Link to="/products" key={c}><span className="circle"><CategoryIcon name={c} /></span>{c}</Link>)}</div>
        </Section>
        <Section title="Produtos em alta" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
      <section className="special">
        <div className="container special-grid">
          <img src="/special-offer.png" alt="Air Jordan edição de colecionador" />
          <div>
            <small>Oferta especial</small>
            <h2>Air Jordan edição de colecionador</h2>
            <p>O Air Jordan em edição de colecionador chegou à Drip Store. Couro premium, design icônico e unidades limitadas para quem não abre mão de estilo.</p>
            <Link to="/products" className="btn-primary">Ver Oferta</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
