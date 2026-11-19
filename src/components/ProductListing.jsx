import ProductCard from './ProductCard'
export default function ProductListing({ products, columns = 4 }) {
  return (
    <div className="listing" style={{ '--cols': columns }}>
      {products.map((p) => <ProductCard key={p.id} {...p} />)}
    </div>
  )
}
