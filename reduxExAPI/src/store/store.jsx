import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/userReducer"
import ProductReducer from "./reducers/ProductReducer"


export default configureStore({
  reducer: {

    userReducer: userReducer,
    ProductReducer: ProductReducer

  }
})