import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-container">
      <div className="newsletter-details">
        <h2>Join our newsletter and get 20% off</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
      </div>

      <div className="newsletter-input">
        <input type="text" placeholder="Enter Email" />
      </div>
    </section>
  );
};

export default Newsletter;
