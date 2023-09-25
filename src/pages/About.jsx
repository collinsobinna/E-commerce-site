import React from "react";
import hero from "../images/hero-bcg.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-nav">
        <h2>
          <Link to="/">
            Home <span>/ About</span>
          </Link>
        </h2>
      </div>

      <div className="about-details">
        <div>
          <img src={hero} alt="" />
        </div>

        <div>
          <h2>Our Story</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
