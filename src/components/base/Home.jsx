import React from "react";
import styles from '../styles/Home.module.css';
import backgroundHome from '../../assets/backgroundHome.png';

function Home(){
  return(
    <section className={styles.body}>
      <img className={styles.backgroundHome} src={backgroundHome} alt="backgroundHome" />
    </section>
  );
}
export default Home;