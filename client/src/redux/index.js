import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./reducers/productReducer";
import productByIdReducer from './reducers/productByIdReducer';
import authReducer from './reducers/authReducer';


export const store = configureStore({
  reducer: {
    productReducer,
    productByIdReducer,
    authReducer
  }
});