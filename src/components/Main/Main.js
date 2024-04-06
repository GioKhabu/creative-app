import React from 'react';
import About from '../About/About';
import ServiceInfo from '../Service/Service';
import styles from './Main.styles.module.css'
import Projects from '../Projects/Projects';
function Main() {
  return <main className={styles.main}>
  <About />
  <ServiceInfo />
  <Projects />
  </main>;
}

export default Main;
