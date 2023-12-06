import { combineReducers } from "redux";
import productReducer from "./ProductReducers";
import { filterReducer } from "./reducer/filterReducer";

const rootReducer = combineReducers({
  products: productReducer,
  searchProduct:filterReducer
});

export default rootReducer;
