import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "./action";


const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const searchProduct=useSelector((state)=>state.searchProduct.prdData)
  console.log(searchProduct);
  console.log(searchProduct.length===0);
  
useState(console.log("useSatate"))
  useEffect(() => {
    console.log("inside useeefct");
    dispatch(fetchProductsAsync());
  }, [dispatch]);



  function filterfun(){
    return(
    <div className="container">      
      {console.log("inside retuen")}
        {searchProduct.map((product) => (
          <div className="product-item" key={product.id}>           
            <img className="image" src={product.image} alt="" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p>Rating {product.rating.rate}(<span>{product.rating.count}</span>)</p>              
          </div>     
        ))}
        
      </div>
    )
  }
  function initfun(){
    return(
    <div className="container">      
      {console.log("inside retuen")}
        {products.map((product) => (
          <div className="product-item" key={product.id}>           
            <img className="image" src={product.image} alt="" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p>Rating {product.rating.rate}(<span>{product.rating.count}</span>)</p>              
          </div>     
        ))}
        
      </div>
    )

  }

  return (
    <>
   {searchProduct.length === 0?initfun():filterfun()}
    </>
    
   
  );
};

export default ProductList;
