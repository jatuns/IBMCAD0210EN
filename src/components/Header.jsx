import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header() {
  const { state } = useCart()
  const { pathname } = useLocation()

  return (
    <header className="header">
      <nav className="nav">
        {pathname !== '/products' && <Link to="/products">Products</Link>}
        {pathname !== '/cart' && <Link to="/cart">Cart</Link>}
      </nav>
      <div className="cart">
        <FaShoppingCart />
        <span className="badge">{state.totalCount}</span>
      </div>
    </header>
  )
}