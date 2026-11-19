export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  const [int, dec] = (priceDiscount ?? price).toFixed(2).split('.')
  return (
    <div className="buybox">
      <h1>{name}</h1>
      <small className="ref">{reference}</small>
      <div className="rate">
        <span className="stars">★★★★☆</span>
        <span className="badge">{stars} ★</span>
        <span className="rating">({rating} avaliações)</span>
      </div>
      <p className="bprice">
        <span>R$</span><b>{int}</b><sup>,{dec}</sup>
        {priceDiscount && <s>{price.toFixed(2).replace('.', ',')}</s>}
      </p>
      <h5>Descrição do produto</h5>
      <p className="desc">{description}</p>
      {children}
      <button className="btn-buy">COMPRAR</button>
    </div>
  )
}
