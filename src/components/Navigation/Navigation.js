import React from "react";
import styles from "./Navigation.styles.module.css";

function Navigation({burgerActive}) {

  return (
    <nav style={!burgerActive ? {transform: 'translateY(-235px)'} : null} className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#about">About</a></li>
        <li className={styles.navItem}><a href="#services">Service</a></li>
        <li className={styles.navItem}><a href="#projects">Projects</a></li>
        <li className={styles.exception}>Schedule a Call</li>
      </ul>
    </nav>
  );
}

export default Navigation;
