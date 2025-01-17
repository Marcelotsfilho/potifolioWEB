import React from "react";
import Styles from "../styles/Header.module.css";

function Header(){
  return(
    <header className={Styles.content}>
      <nav>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li> 
          <li>
            <a href="#portfolio">PORTIFÓLIO</a>
          </li>
        </ul>
      </nav> 
    </header>
  );
}
export default Header;