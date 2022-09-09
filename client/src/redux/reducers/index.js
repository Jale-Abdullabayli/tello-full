import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productByIdReducer from "./productByIdReducer";

 const rootReducer=combineReducers({
    productReducer,
    productByIdReducer
})

export default rootReducer;