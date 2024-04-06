import React from "react";
import whitePattern from "../../assets/desktop/bg-pattern-wavy-white.svg";
import styles from "./Projects.styles.module.css";

const data = [
  {
    title: "Brand naming & guidelines",
    imageTitle: "Lean Product Roadmap",
    date: "2019 Project",
    srcDesktop: "images/desktop/image-slide-1.jpg",
    srcTablet: "images/tablet/image-slide-1.jpg",
    srcMobile: "images/mobile/image-slide-1.jpg",
  },
  {
    title: "Brand identity & merchandise",
    imageTitle: "New Majestic Hotel",
    date: "2018 Project",
    srcDesktop: "images/desktop/image-slide-2.jpg",
    srcTablet: "images/tablet/image-slide-2.jpg",
    srcMobile: "images/mobile/image-slide-2.jpg",
  },
  {
    title: "Brand identity & web design",
    imageTitle: "Crypto Dashboard",
    date: "2016 Project",
    srcDesktop: "images/desktop/image-slide-3.jpg",
    srcTablet: "images/tablet/image-slide-3.jpg",
    srcMobile: "images/mobile/image-slide-3.jpg",
  },
];

function Projects() {
  const [projectN, setProjectN] = React.useState(0);
  function moveForward() {
    if (projectN < 2) {
      setProjectN(projectN + 1);
    }
  }
  function moveBackward() {
    if (projectN > 0) {
      setProjectN(projectN - 1);
    }
  }
  return (
    <section id='projects' className={styles.projectsWrapper}>
      <div className={styles.titleWrapper}>
        <img src={whitePattern} alt="white wave pattern" />
        <div className={styles.titleGroup}>
          <h2>{data[projectN].title}</h2>
          <div className={styles.buttons}>
            <button onClick={moveBackward}>{`<`}</button>
            <button onClick={moveForward}>{`>`}</button>
          </div>
        </div>
      </div>
      <div className={styles.projetImage}>
        <img
            src={data[projectN].srcDesktop}
            alt={data[projectN].imageTitle} 
            className={styles.desktopImage}
          />
          <img src={data[projectN].srcTablet} alt={data[projectN].imageTitle}  className={styles.tabletImage} />
          <img src={data[projectN].srcMobile} alt={data[projectN].imageTitle}  className={styles.mobileImage} />
        <div className={styles.darkPattern}>
          <div className={styles.imageData}>
            <h3>{data[projectN].imageTitle}</h3>
            <h4>{data[projectN].date}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
