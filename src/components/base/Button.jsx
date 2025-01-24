import React from 'react';
import styles from '../styles/Button.module.css';

function Button({ text, url, variant }) {
  const handleClick = () => {
    // Redireciona para a URL fornecida
    window.open(url, "_blank");
  };

  // Define a classe com base na prop variant
  const buttonClass = variant ? styles[variant] : styles.Button;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;