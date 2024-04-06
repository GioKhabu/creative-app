import React from "react";
import styles from './About.styles.module.css'
function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.aboutInfo}>
        <h2>Branding & website design agency</h2>
        <p>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button>Learn More</button>
      </div>
      <img src='images/desktop/image-hero.jpg' alt="Desktop" className={styles.desktopImage} />
      <img src='images/tablet/image-hero.jpg' alt="Tablet" className={styles.tabletImage} />
      <img src='images/mobile/image-hero.jpg' alt="Mobile" className={styles.mobileImage} />
    </section>
  );
}

export default About;
