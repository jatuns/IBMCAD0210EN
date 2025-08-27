import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext()

const initial = { items: [], totalCount: 0, totalPrice: 0 }

function recalc(items) {
  const totalCount = items.reduce((s, it) => s + it.qty, 0)
  const totalPrice = items.reduce((s, it) => s + it.qty * it.price, 0)
  return { totalCount, totalPrice }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product } = action
      const exists = state.items.find(it => it.id === product.id)
      let items
      if (exists) {
        items = state.items.map(it => it.id === product.id ? { ...it, qty: it.qty + 1 } : it)
      } else {
        items = [...state.items, { ...product, qty: 1 }]
      }
      const meta = recalc(items)
      return { ...state, items, ...meta }
    }
    case 'INCREMENT': {
      const items = state.items.map(it => it.id === action.id ? { ...it, qty: it.qty + 1 } : it)
      const meta = recalc(items)
      return { ...state, items, ...meta }
    }
    case 'DECREMENT': {
      const items = state.items
        .map(it => it.id === action.id ? { ...it, qty: Math.max(1, it.qty - 1) } : it)
      const meta = recalc(items)
      return { ...state, items, ...meta }
    }
    case 'REMOVE_ITEM': {
      const items = state.items.filter(it => it.id !== action.id)
      const meta = recalc(items)
      return { ...state, items, ...meta }
    }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)
  const api = useMemo(() => ({ state, dispatch }), [state])
  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}