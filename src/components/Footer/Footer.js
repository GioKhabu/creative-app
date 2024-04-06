import React from "react";
import redWave from "../../assets/desktop/bg-pattern-wave-red.svg";
import styles from './Footer.styles.module.css'
function Footer() {
  return <footer className={styles.footer}>
    <img src={redWave} alt="red wave pattern" />
    <h2>Let's build something great together.</h2>
    <button>Schedule a Call</button>
  </footer>;
}

export default Footer;
