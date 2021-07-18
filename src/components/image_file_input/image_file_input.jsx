import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css'

const Imgefileinput = ({ ImageUploader, name, onFileChange }) => {
    const [loading, setloading] = useState(false);
    const inputRef = useRef();
    const onButtonclick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }
    const onChange = async event => {
        setloading(true);
        console.log(event.target.files[0]);
        const uploaded = await ImageUploader.upload(event.target.files[0]);
        setloading(false);
        console.log(uploaded)
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
    };
    return (
        <div className={styles.container}>
            <input
                ref={inputRef}
                className={styles.input}
                type="file"
                accept="image/*"
                name="file"
                onChange={onChange}
            />
            {!loading && (
                <button button className={`${styles.button} ${name ? styles.pink : styles.grey}`} //중요포인트.
                    onClick={onButtonclick}>
                    {name || 'No file'}
                </button>
            )}
            {loading && <div className={styles.loading}></div>}
        </div >
    );

}

export default Imgefileinput;