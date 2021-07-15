import React from 'react';
import styles from './button.module.css'

const button = ({ name, onClick }) => (
    <button className={styles.button} onClick={onClick}>
        {name}
    </button>
);

export default button;