import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

function recalc(items) {
  const totalCount = items.reduce((s, it) => s + (it.qty || 0), 0);
  const totalPrice = items.reduce((s, it) => s + (it.price || 0) * (it.qty || 0), 0);
  return { totalCount, totalPrice };
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(product)
    addItem(state, action) {
      const product = action.payload;
      const exists = state.items.find((it) => it.id === product.id);
      if (exists) {
        exists.qty += 1;
      } else {
        state.items.push({ ...product, qty: product.qty ? product.qty : 1 });
      }
      const meta = recalc(state.items);
      state.totalCount = meta.totalCount;
      state.totalPrice = meta.totalPrice;
    },

    // removeItem(id)
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((it) => it.id !== id);
      const meta = recalc(state.items);
      state.totalCount = meta.totalCount;
      state.totalPrice = meta.totalPrice;
    },

    /**
     * updateQuantity({ id, qty })
     */
    updateQuantity(state, action) {
      const { id, qty, qtyDelta } = action.payload || {};
      const it = state.items.find((x) => x.id === id);
      if (!it) return;

      if (typeof qtyDelta === 'number') {
        it.qty += qtyDelta;
      } else if (typeof qty === 'number') {
        it.qty = qty;
      }

      if (it.qty <= 0) {
        state.items = state.items.filter((x) => x.id !== id);
      }

      const meta = recalc(state.items);
      state.totalCount = meta.totalCount;
      state.totalPrice = meta.totalPrice;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;