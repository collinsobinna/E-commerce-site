import React, { useState } from "react";
import data from "../assets/data";
import logo from "../images/logo.2.svg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ cartItems }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <section className="navbar-container">
      <div>
        {/* <img src={logo} alt="" /> */}
        <h1>
          Collins<span>Sloth</span>
        </h1>
      </div>

      <div>
        <ul
          className={click ? "navbar-links active" : "navbar-links"}
          onClick={handleClick}
        >
          <li>
            <Link to="/E-commerce-site" className="mainlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="mainlink">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="mainlink">
              Products
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-cart">
        <Link to="/cart" className="mainlink">
          Cart <FaShoppingCart />
          {cartItems.length === 0 ? "" : cartItems.length}
        </Link>
      </div>

      <div className="hamburger" onClick={handleClick}>
        <GiHamburgerMenu />
      </div>
    </section>
  );
};

export default NavBar;
