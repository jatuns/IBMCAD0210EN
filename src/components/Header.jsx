// src/components/Header.jsx
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header() {
  const { state } = useCart()

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="brand">Paradise Nursery</Link>
      </div>

      <div className="header__center">
        <Link to="/products" className="navlink">Products</Link>
      </div>
      
      <div className="header__right">
        <Link to="/cart" className="cartbtn" aria-label="Open shopping cart">
          <FaShoppingCart aria-hidden="true" />
          <span className="badge">{state.totalCount}</span>
        </Link>
      </div>
    </header>
  )
}