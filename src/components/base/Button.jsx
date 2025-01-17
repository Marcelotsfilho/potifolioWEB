import React from 'react';
import styles from '../styles/Button.module.css';

function Button({ text }) {
  return (
    <button className={styles.Button}>
      {text}
    </button>
  );
}

export default Button;
