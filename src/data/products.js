const brands = ['K-Swiss', 'Adiddas', 'Nike', 'Puma']
const categories = ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida']
const genders = ['Masculino', 'Feminino', 'Unisex']

export const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: 'K-Swiss V8 - Masculino',
  brand: brands[i % 4],
  category: categories[i % 3],
  gender: genders[Math.floor(i / 4)],
  state: i % 5 === 4 ? 'Usado' : 'Novo',
  image: `/product-thumb-${(i % 2) + 1}.png`,
  price: 200,
  priceDiscount: i % 3 === 2 ? undefined : 100,
}))