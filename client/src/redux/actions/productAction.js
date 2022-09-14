import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProductsAsync = createAsyncThunk("product/fetchProducts",
    async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/products');
        const products = response.data.data.products;
        return products;
    }
)


export const fetchProductByIdAsync = createAsyncThunk("productById/fetchProductById",
    async (id) => {
        const response = await axios.get(`http://127.0.0.1:5000/api/v1/products/${id}`);
        const product = response.data.data.product;
        return product;
    }
)
