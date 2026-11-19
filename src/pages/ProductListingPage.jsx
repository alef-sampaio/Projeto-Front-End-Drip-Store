import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout from './Layout'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import FilterGroup from '../components/FilterGroup'
import { products } from '../data/products'

const opts = (...t) => t.map((text) => ({ text }))

export default function ProductListingPage() {
  const [params] = useSearchParams()
  const filter = (params.get('filter') || '').toLowerCase()
  const [order, setOrder] = useState('')
  const [brands, setBrands] = useState([])
  const toggle = (b) => setBrands((s) => (s.includes(b) ? s.filter((x) => x !== b) : [...s, b]))

  const list = useMemo(() => {
    const price = (p) => p.priceDiscount ?? p.price
    let l = products.filter((p) => !filter || `${p.name} ${p.brand}`.toLowerCase().includes(filter))
    if (brands.length) l = l.filter((p) => brands.includes(p.brand))
    if (order === 'min') l = [...l].sort((a, b) => price(a) - price(b))
    if (order === 'max') l = [...l].sort((a, b) => price(b) - price(a))
    return l
  }, [filter, brands, order])

  return (
    <Layout>
      <div className="container list-page">
        <div className="list-top">
          <p><b>Resultados{filter && ` para "${params.get('filter')}"`}</b> - {list.length} produtos</p>
          <label className="sort"><b>Ordenar por:</b>
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="">mais relevantes</option>
              <option value="min">menor preço</option>
              <option value="max">maior preço</option>
            </select>
          </label>
        </div>
        <div className="list-body">
          <aside className="filters">
            <h3>Filtrar por</h3><hr />
            <FilterGroup title="Marca" options={opts('Adiddas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma')} selected={brands} onChange={toggle} />
            <FilterGroup title="Categoria" options={opts('Esporte e lazer', 'Casual', 'Utilitário', 'Corrida')} />
            <FilterGroup title="Gênero" options={opts('Masculino', 'Feminino', 'Unisex')} />
            <FilterGroup title="Estado" inputType="radio" options={opts('Novo', 'Usado')} />
          </aside>
          <ProductListing products={list} columns={3} />
        </div>
      </div>
    </Layout>
  )
}
