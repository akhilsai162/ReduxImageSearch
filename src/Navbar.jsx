import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "./action/filterAction";

const Navbar = () => {
  const [searchPrd, setSearchPrd] = useState("");
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleSearchData = (e) => {
    let { value } = e.target;
    value = value.toLowerCase();
    const tempPrdData = products.filter((prd) =>
      prd.title.toLowerCase().includes(value)
    );
    setSearchPrd(value);
    dispatch(filterAction(tempPrdData));
  };
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src="images\myntra-1200x900.webp" alt="" />
        </div>
        <ul>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>

          <li>
            <a href="#">Jewellery</a>
          </li>
        </ul>
        <div className="search-box">
          <input
            type="text"
            id="search"
            placeholder="Search for products,brands and more"
            value={searchPrd}
            onChange={handleSearchData}
          />
          <div className="search-icon">
            <img src="images\search-svgrepo-com.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
