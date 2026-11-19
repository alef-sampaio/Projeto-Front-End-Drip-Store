import { Link } from 'react-router-dom'
export default function ProductCard({ id, image, name, price, priceDiscount, category = 'Tênis' }) {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card-img">
        {priceDiscount && <span className="tag">30% OFF</span>}
        <img src={image} alt={name} />
      </div>
      <small>{category}</small>
      <h3>{name}</h3>
      <p className="prices">
        {priceDiscount ? <><s>${price}</s><b>${priceDiscount}</b></> : <b>${price}</b>}
      </p>
    </Link>
  )
}
