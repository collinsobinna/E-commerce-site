import React from "react";
import hero from "../images/hero-bcg.jpeg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const FeaturedProduct = ({ data }) => {
  console.log(data);

  const shuffledData = data.sort(() => Math.random() - 0.5);
  const randomThreeItems = shuffledData.slice(0, 3);

  return (
    <div className="product-container">
      {randomThreeItems.map((item) => {
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
      {/* <div className="product">
        <div className="product-image">
          <img src={hero} alt="" />

          <div className="overlay">
            <Link to="details" className="search-icon">
              <FaSearch />
            </Link>
          </div>
        </div>

        <div className="product-details">
          <h5>Entertainment Center</h5>

          <p>$599.99</p>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedProduct;
