import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getproducts:(state, action) => {
      console.log(action);
      state.products = action.payload
    },
    productdelete: (state, action) => {
      state.products.splice(action.payload, 1);
    },
    
  },
})

export default ProductSlice.reducer
export const { getproducts, productdelete } = ProductSlice.actions;

