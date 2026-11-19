import { useParams } from 'react-router-dom'
import Layout from './Layout'
import Gallery from '../components/Gallery'
import BuyBox from '../components/BuyBox'
import ProductOptions from '../components/ProductOptions'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import { products } from '../data/products'

const imgs = [1, 2, 3, 4, 5].map((n) => ({ src: `/product-image-${n}.png` }))

export default function ProductViewPage() {
  const { id } = useParams()
  const p = products.find((x) => x.id === Number(id)) || products[0]
  return (
    <Layout>
      <div className="container">
        <p className="crumbs"><b>Home</b> / Produtos / Tênis / {p.brand} / {p.name}</p>
        <div className="view">
          <Gallery images={imgs} width="700" height="570" radius="4px" showThumbs />
          <BuyBox name="Tênis Nike Revolution 6 Next Nature Masculino" reference="Casual | Nike | REF:38416711"
            stars={4.7} rating={90} price={219}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.">
            <h5>Tamanho</h5>
            <ProductOptions options={['39', '40', '41', '42', '43']} />
            <h5>Cor</h5>
            <ProductOptions options={['#6FEEFF', '#FF6B6B', '#5E5E5E', '#6D70B7']} shape="circle" type="color" />
          </BuyBox>
        </div>
        <Section title="Produtos Relacionados" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={products.slice(0, 4)} />
        </Section>
      </div>
    </Layout>
  )
}
