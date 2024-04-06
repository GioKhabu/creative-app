import React from "react";
import styles from './BurgerMenu.styles.module.css'

function BurgerMenu({burgerActive, setBurgerActive}) {
  return (
    <svg
      id="hamburger"
      className={`${styles.hamburgerToggle} ${
        burgerActive && styles.hamburgerToggleActive
      }`}
      onClick={() => setBurgerActive(!burgerActive)}
    >
      <g stroke="#979797" strokeWidth="2">
        <path
          id="top-line"
          className={styles.topLine}
          d="M10,10 L34,10 Z"
        ></path>
        <path
          id="middle-line"
          className={styles.middleLine}
          d="M10,18 L34,18 Z"
        ></path>
        <path
          id="bottom-line"
          className={styles.bottomLine}
          d="M10,26 L34,26 Z"
        ></path>
      </g>
    </svg>
  );
}

export default BurgerMenu;
