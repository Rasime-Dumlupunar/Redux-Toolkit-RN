import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import productReducer from './slice/productSlice';
import cartReducer from './slice/cartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
export default store;
