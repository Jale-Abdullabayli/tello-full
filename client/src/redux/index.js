import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./reducers/productReducer";
import productByIdReducer from './reducers/productByIdReducer';


export const store = configureStore({
  reducer: {
    productReducer,
    productByIdReducer
  }
});