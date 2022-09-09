import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR,GET_PRODUCT_BY_ID_SUCCESS,GET_PRODUCT_BY_ID_LOADING,GET_PRODUCT_BY_ID_ERROR } from '../constants';
import axios from 'axios';


export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/products');
        const products = response.data.data.products;
        console.log(response.data)
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    }
    catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
    }
}


export const fetchProductById = (id) => async (dispatch) => {
    dispatch({ type: GET_PRODUCT_BY_ID_LOADING });
    try {
        const response = await axios.get(`http://127.0.0.1:5000/api/v1/products/${id}`);
        const products = response.data.data.product;
        // console.log(response.data)
        dispatch({ type: GET_PRODUCT_BY_ID_SUCCESS, payload: products });
    }
    catch (error) {
        dispatch({ type: GET_PRODUCT_BY_ID_ERROR, payload: error.message });
    }
}