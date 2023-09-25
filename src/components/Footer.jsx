import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-container">
      <p>
        © {currentYear} <span>CollinsSloth</span> All rights reserved
      </p>
    </section>
  );
};

export default Footer;
