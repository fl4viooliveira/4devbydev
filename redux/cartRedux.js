import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload.product);
      state.quantity += 1;
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.cartId !== action.payload[0]
      );
      state.quantity -= 1;
      state.total -= action.payload[1];
    },
    cleanCart: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;
