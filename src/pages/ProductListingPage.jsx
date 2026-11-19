import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout from './Layout'
import ProductListing from '../components/ProductListing'
import FilterGroup from '../components/FilterGroup'
import { products } from '../data/products'

const opts = (...t) => t.map((text) => ({ text }))

export default function ProductListingPage() {
  const [params] = useSearchParams()
  const filter = (params.get('filter') || '').toLowerCase()
  const [order, setOrder] = useState('')
  const [sel, setSel] = useState({ brand: [], category: [], gender: [], state: [] })

  const toggle = (key) => (v) =>
    setSel((s) => ({ ...s, [key]: s[key].includes(v) ? s[key].filter((x) => x !== v) : [...s[key], v] }))
  const choose = (key) => (v) => setSel((s) => ({ ...s, [key]: [v] }))

  const list = useMemo(() => {
    const price = (p) => p.priceDiscount ?? p.price
    let l = products.filter((p) => !filter || `${p.name} ${p.brand}`.toLowerCase().includes(filter))
    for (const k of Object.keys(sel)) if (sel[k].length) l = l.filter((p) => sel[k].includes(p[k]))
    if (order === 'min') l = [...l].sort((a, b) => price(a) - price(b))
    if (order === 'max') l = [...l].sort((a, b) => price(b) - price(a))
    return l
  }, [filter, sel, order])

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
            <FilterGroup title="Marca" options={opts('Adiddas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma')} selected={sel.brand} onChange={toggle('brand')} />
            <FilterGroup title="Categoria" options={opts('Esporte e lazer', 'Casual', 'Utilitário', 'Corrida')} selected={sel.category} onChange={toggle('category')} />
            <FilterGroup title="Gênero" options={opts('Masculino', 'Feminino', 'Unisex')} selected={sel.gender} onChange={toggle('gender')} />
            <FilterGroup title="Estado" inputType="radio" options={opts('Novo', 'Usado')} selected={sel.state} onChange={choose('state')} />
          </aside>
          {list.length ? <ProductListing products={list} columns={3} /> : <p className="empty">Nenhum produto encontrado com esses filtros.</p>}
        </div>
      </div>
    </Layout>
  )
}