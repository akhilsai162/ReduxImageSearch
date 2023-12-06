import { fetchProducts } from "./api";

export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const fetchProductsAsync = () => {
  return async (dispatch) => {
    const products = await fetchProducts();
    dispatch(setProducts(products));
  };
};
