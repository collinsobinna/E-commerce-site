import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../images/hero-bcg.jpeg";
import hero2 from "../images/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-details">
        <h1>Design Your Comfort Zone</h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>

        <button className="btn">
          <Link to="/products">SHOP NOW</Link>
        </button>
      </div>

      <div className="hero-img">
        <img src={hero1} alt="" />

        <div className="hero-absolute">
          <img src={hero2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
