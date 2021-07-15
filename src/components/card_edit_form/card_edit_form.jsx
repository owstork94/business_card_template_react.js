import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import Imgefileinput from '../image_file_input/image_file_input'
const Card_edit_form = ({ card }) => {

    const { name, company, theme, title, message, fileName, fileURL, email } = card;
    const onSubmit = () => {

    };
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <input className={styles.input} type="text" name="company" value={company} />
            <select className={styles.select} name="theme" value={theme}>
                <option value="Light">Light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>

            <input className={styles.input} type="text" name="title" value={title} />
            <input className={styles.input} type="text" name="message" value={message} />
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileinput}>
                <Imgefileinput />
            </div>
            <Button name='Delete' onClick={onSubmit} />
        </form>
    );

}

// 전달 되어지는건 보라색 prop이름


export default Card_edit_form;