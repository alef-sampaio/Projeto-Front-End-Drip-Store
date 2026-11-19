const brands = ['K-Swiss', 'Adiddas', 'Nike', 'Puma']
export const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: 'K-Swiss V8 - Masculino',
  brand: brands[i % brands.length],
  image: `/product-thumb-${(i % 2) + 1}.png`,
  price: 200,
  priceDiscount: i % 3 === 2 ? undefined : 100,
}))
