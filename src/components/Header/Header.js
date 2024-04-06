import React from "react";
import Logo from "../../assets/logo.svg";
import styles from "./Header.styles.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [burgerActive, setBurgerActive] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    window.innerWidth < 700
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    isSmallScreen ? setBurgerActive(false) : setBurgerActive(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);


  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <BurgerMenu
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
      />
      <Navigation burgerActive={burgerActive} />
    </header>
  );
}

export default Header;
