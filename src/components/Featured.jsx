import React from "react";
import { Link } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";

const Featured = ({ data }) => {
  return (
    <section className="featured-container">
      <h2>Featured Products</h2>

      <FeaturedProduct data={data} />

      <button className="btn">
        <Link to="/products">ALL PRODUCTS</Link>
      </button>
    </section>
  );
};

export default Featured;
