import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';
const Card = ({ card }) => {
    const { name, company, theme, title, message, fileName, fileURL, email } = card;
    const url = fileURL || DEFAULT_IMAGE;

    return (
        <li className={`${styles.card} ${getstyles(theme)}`}>
            <img className={styles.avatar} src={url} alt="profilephoto" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.title}>{title}</p>
                <p className={styles.company}>{company}</p>
                <p className={styles.message}>{message}</p>
                <p className={styles.email}>{email}</p>
            </div>
        </li>

    )
}

function getstyles(theme) {
    switch (theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}


export default Card;