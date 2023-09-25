import React from "react";
import { GiCompass, GiHistogram } from "react-icons/gi";

const Mission = () => {
  return (
    <section className="mission-container">
      <div className="mission-details">
        <h2>Custom Furniture Built Only For You</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </div>

      <div className="mission-grid">
        <div className="mission-grid-one">
          <GiCompass className="mission-icon" />

          <h3>Mission</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>

        <div className="mission-grid-one">
          <GiHistogram className="mission-icon" />

          <h3>Vision</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>

        <div className="mission-grid-one">
          <GiCompass className="mission-icon" />

          <h3>History</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
