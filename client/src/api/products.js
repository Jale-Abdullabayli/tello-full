import axios from './index';

export const getProducts=()=>axios.get('/products');
export const getProductById=(id)=>axios.get(`/products/${id}`);