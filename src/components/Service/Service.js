import React from "react";
import Wave from "../../assets/desktop/bg-pattern-wave-red.svg";
import styles from "./Service.Styles.module.css";
import ServiceStrategry from "../ServiceStrategry/ServiceStrategry";
function ServiceInfo() {
  return (
    <section id='services' className={styles.serviceSection}>
      <div className={styles.serviceInfoWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src="images/desktop/image-strategic.jpg"
            alt="Desktop"
            className={styles.desktopImage}
          />
          <img src="images/tablet/image-strategic.jpg" alt="Tablet" className={styles.tabletImage} />
          <img src="images/mobile/image-strategic.jpg" alt="Mobile" className={styles.mobileImage} />
        </div>
        <article className={styles.infoGroup}>
          <img src={Wave} alt="Wave pattern" className={styles.pattern} />
          <div className={styles.info}>
            <h2>
              <span>Design </span>
              is strategic.
            </h2>
            <p>
              “A well-crafted design strategy consistently produces desired
              outcomes and brand awareness. We are firm believers that success
              lies in creative collaboration with our clients.”
            </p>
            <button>Schedule a Call</button>
          </div>
        </article>
      </div>
      <ServiceStrategry />
    </section>
  );
}

export default ServiceInfo;
