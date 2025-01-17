import React from "react";
import styles from '../styles/Img.module.css';
import ImgMarcelo from '../../assets/ImgMarcelo.png';

function Img(){
  return(
    <section className={styles.body}>
      <img className={styles.ImgMarcelo} src={ImgMarcelo} alt="backgroundHome" />
    </section>
  );
}
export default Img;