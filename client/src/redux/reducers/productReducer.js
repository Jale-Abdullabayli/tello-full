import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from '../constants';


const initialState = {
    loading: false,
    products: [],
    error: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LOADING:
            return { ...state, loading: true }
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, loading: false }
        case GET_PRODUCTS_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default productReducer;