import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
    const { state, dispatch } = useCart()

    // Toplamlar (gerekirse vergi/kargo ekleyebilirsin, ama gereksinim "total cost" için state.totalPrice yeterli)
    const isEmpty = state.items.length === 0

    function handleCheckout() {
    // Gereksinim: "Coming Soon" gibi bir mesaj göster
        alert('Coming Soon')
    }

  return (
    <main className="cart-page">
      <h2>Shopping Cart</h2>

      <div className="summary">
        <div><strong>Total items:</strong> {state.totalCount}</div>
        <div><strong>Total cost:</strong> ₺{state.totalPrice.toFixed(2)}</div>
      </div>

      {state.items.length === 0 ? (
        <p>Sepet boş. <Link to="/products">Alışverişe devam et</Link></p>
      ) : (
        <ul className="cart-list">
          {state.items.map(it => (
            <li key={it.id} className="cart-row">
              <img src={it.thumb} alt={it.name} />
              <div className="info">
                <h3>{it.name}</h3>
                <p>Unit: ₺{it.price.toFixed(2)} | Line: ₺{(it.price * it.qty).toFixed(2)}</p>
                <div className="qty">
                  <button onClick={() => dispatch({ type: 'DECREMENT', id: it.id })}>-</button>
                  <span>{it.qty}</span>
                  <button onClick={() => dispatch({ type: 'INCREMENT', id: it.id })}>+</button>
                </div>
              </div>
              <button className="delete" onClick={() => dispatch({ type: 'REMOVE_ITEM', id: it.id })}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <div className="actions">
        <Link className="ghost" to="/products">Continue Shopping</Link>
        <button className="primary">Checkout</button>
      </div>
    </main>
  )
}