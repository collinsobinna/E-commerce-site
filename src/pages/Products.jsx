import React from "react";
import { Link } from "react-router-dom";
import data from "../assets/data";
import MainProduct from "../components/MainProduct";

const Products = () => {
  return (
    <section className="mainProduct-container">
      <div className="about-nav">
        <h2>
          <Link to="/E-commerce-site">
            Home <span>/ Products</span>
          </Link>
        </h2>
      </div>

      <div className="mainProduct">
        <MainProduct data={data} />
      </div>
    </section>
  );
};

export default Products;

// import React, { useState } from "react";
// import Details from "./Details";

// const Products = () => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div>
//       Products
//       <button onClick={toggleDetails}>Show Details</button>
//       {showDetails && <Details />}
//     </div>
//   );
// };

// export default Products;
