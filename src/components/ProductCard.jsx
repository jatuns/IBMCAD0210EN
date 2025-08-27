import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { dispatch } = useCart()
  return (
    <div className="card">
      <img src={product.thumb} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₺{product.price.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', product })}>
        Add to Cart
      </button>
    </div>
  )
}