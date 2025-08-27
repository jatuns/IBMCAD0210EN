import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { state, dispatch } = useCart()
  const inCart = state.items.some(it => it.id === product.id)
  return (
    <div className="card">
      <img src={product.thumb} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₺{product.price.toFixed(2)}</p>
      <button
        disabled={inCart}
        aria-disabled={inCart}
        onClick={() => dispatch({ type: 'ADD_ITEM', product })}
        title={inCart ? 'Already in cart' : 'Add to Cart'}
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  )
}