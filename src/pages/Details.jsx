import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../assets/data";

import ThumbnailGallery from "../components/ThumbnailGallery";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

const Details = () => {
  const { itemId } = useParams(); // Get the itemId parameter from the URL

  // Find the item with the matching itemId
  const selectedItem = data.find((item) => item.id === parseInt(itemId));

  if (!selectedItem) {
    // Handle the case where the item is not found (optional)
    return <div>Item not found</div>;
  }

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const productIndexInCart = existingItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (productIndexInCart !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedItems = [...existingItems];
      updatedItems[productIndexInCart].quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    } else {
      // If the product is not in the cart, add it as a new entry with quantity 1
      const newItem = { ...selectedItem, quantity: 1 };
      const updatedItems = [...existingItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    }
  };

  return (
    <section className="details-container">
      <div className="about-nav">
        <h2>
          <Link to="/E-commerce-site">
            Home / <Link to="/products">Products</Link>
            <span> / {selectedItem.name}</span>
          </Link>
        </h2>
      </div>

      <button className="btn details-btn">
        <Link to="/products">BACK TO PRODUCTS</Link>
      </button>

      <div className="details">
        <div className="details-gallery">
          <ThumbnailGallery selectedItem={selectedItem} />
        </div>

        <div className="details-info">
          <h1>{selectedItem.name}</h1>

          <div className="details-rating">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BiSolidStarHalf />
            <AiOutlineStar />
            <h6>({selectedItem.rating})</h6>
          </div>

          <h3>${selectedItem.price}</h3>

          <p>{selectedItem.description}</p>

          <div className="details-availibity">
            <h4>
              Available : <span>{selectedItem.available}</span>
            </h4>
            <h4>
              SKU : <span>{selectedItem.SKU}</span>
            </h4>
            <h4>
              Brand : <span>{selectedItem.brand}</span>
            </h4>
          </div>

          <hr />

          <div className="details-btns">
            <button onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
              -
            </button>

            <h5>{quantity}</h5>

            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button className="btn" onClick={addToCart}>
            <Link to="/cart">ADD TO CART</Link>
          </button>

          {/* <div className="details-btns">
            <button>-</button>
            <h5>1</h5>
            <button>+</button>
          </div>

          <button className="btn">
            <Link to="/cart">ADD TO CART</Link>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Details;
