import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/produtos" element={<Navigate to="/products" replace />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
