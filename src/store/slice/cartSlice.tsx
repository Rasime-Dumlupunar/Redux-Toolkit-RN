import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.totalPrice += Number(action.payload.price) * action.payload.count;
    },

    removeItemCart: (state, action) => {
      state.cart = state.cart.filter(
        product => product.id !== action.payload.id,
      );
      if (state.cart.length == 0) state.totalPrice = 0;
      else
        state.totalPrice -= Number(action.payload.price) * action.payload.count;
    },

    updateItem: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.count = action.count;
      }
    },
    incrementProduct: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.count = Number(product.count) + 1;
        state.totalPrice += Number(action.payload.price);
      }
    },
    decrementProduct: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product && product.count > 1) {
        product.count = Number(product.count) - 1;
        state.totalPrice -= Number(action.payload.price);
      }
    },
  },
});
export const {
  addCart,
  removeItemCart,
  updateItem,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
