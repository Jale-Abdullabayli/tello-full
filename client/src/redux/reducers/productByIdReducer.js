import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCT_BY_ID_LOADING, GET_PRODUCT_BY_ID_SUCCESS, GET_PRODUCT_BY_ID_ERROR } from '../constants';


const initialState = {
    loading: false,
    product: [],
    error: null
};

const productByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID_LOADING:
            return { ...state, loading: true }
        case GET_PRODUCT_BY_ID_SUCCESS:
            return { ...state, product: action.payload, loading: false }
        case GET_PRODUCT_BY_ID_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default productByIdReducer;