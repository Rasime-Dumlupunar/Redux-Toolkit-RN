import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsList: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
