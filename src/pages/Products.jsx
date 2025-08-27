import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { useMemo, useState } from 'react'

export default function Products() {
  const [filter, setFilter] = useState('All')
  const categories = useMemo(() => ['All', ...new Set(products.map(p => p.category))], [])
  const visible = filter === 'All' ? products : products.filter(p => p.category === filter)

  return (
    <main className="products">
      <h2>Houseplants</h2>
      <div className="filters">
        {categories.map(cat => (
          <button key={cat} className={filter === cat ? 'active' : ''} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <div className="grid">
        {visible.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </main>
  )
}