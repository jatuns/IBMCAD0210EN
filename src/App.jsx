import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Header from './components/Header'
import { CartProvider } from './context/CartContext'

export default function App() {
  const { pathname } = useLocation()
  const showHeader = pathname !== '/'

  return (
    <CartProvider>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}