import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage'
import AuthPage from './pages/AuthPage'
import InfoPage from './pages/InfoPage'
import CategoriesPage from './pages/CategoriesPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/produtos" element={<Navigate to="/products" replace />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
      <Route path="/orders" element={<InfoPage title="Meus Pedidos" text="Você ainda não tem pedidos. Entre na sua conta para acompanhar suas compras." />} />
      <Route path="/cart" element={<InfoPage title="Carrinho" text="Seu carrinho está vazio." />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/signup" element={<AuthPage mode="signup" />} />
      <Route path="*" element={<InfoPage title="Página em construção" text="Esta página ainda não está disponível." />} />
    </Routes>
  )
}