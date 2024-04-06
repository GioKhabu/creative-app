import React from "react";
import styles from "./ServiceStartegy.styles.module.css";

function ServiceStrategry() {
  return (
    <div className={styles.strategy}>
      <div className={styles.strategyListGroup}>
        <div className={styles.titleListWrapper}>
          <div className={styles.titleWrapper}>
            <h2>Our approach for creating a winning brand</h2>
          </div>
          <ul className={styles.strategyList}>
            <li>
              <h2>01</h2>
              <h3>Brand Strategy</h3>
              <p>
                Brand strategy is critical for long-term success. Outshining
                competitors and capturing the target audience are key.
              </p>
            </li>
            <li>
              <h2>02</h2>
              <h3>Brand Design</h3>
              <p>
                Keeping the brand design unique and meaningful helps in
                communicating the brand’s timeless value effectively.
              </p>
            </li>
            <li>
              <h2>03</h2>
              <h3>Web Design</h3>
              <p>
                A beautifully crafted website is the best tool for brand
                awareness, and ultimately results in increased revenues.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceStrategry;
