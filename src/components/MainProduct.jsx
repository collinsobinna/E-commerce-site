import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const MainProduct = ({ data }) => {
  return (
    <div className="product-container">
      {data.map((item) => {
        return (
          <div className="product" key={item.id}>
            <div className="product-image">
              <img src={item.image} alt={item.name} />

              <div className="overlay">
                <Link to={`/details/${item.id}`} className="search-icon">
                  <FaSearch />
                </Link>
              </div>
            </div>

            <div className="product-details">
              <h5>{item.name}</h5>

              <p>${item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainProduct;
