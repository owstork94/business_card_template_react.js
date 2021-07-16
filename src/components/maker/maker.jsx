import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/headr';
import styles from './maker.module.css'
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
    const [cards, setcards] = useState([
        {
            id: '1',
            name: 'sehun',
            company: 'samsung',
            email: 'owstork94@gmail.com',
            theme: 'light',
            title: 'software Engineer',
            message: 'go for it',
            fileName: "lll",
            fileURL: null
        },
        {
            id: '2',
            name: 'sehun',
            company: 'samsung',
            email: 'owstork94@gmail.com',
            theme: 'colorful',
            title: 'software Engineer',
            message: 'go for it',
            fileName: "lll",
            fileURL: null
        },
        {
            id: '3',
            name: 'sehun',
            company: 'samsung',
            email: 'owstork94@gmail.com',
            theme: 'dark',
            title: 'software Engineer',
            message: 'go for it',
            fileName: "lll",
            fileURL: null
        },

    ])
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };


    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        });
    });
    const addCard = card => {
        console.log(card);
        const updated = [...cards, card];
        setcards(updated);
    }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <section className={styles.cont}>
                <Editor cards={cards} addCard={addCard} />
                <Preview cards={cards} />
            </section>
            <Footer />
        </section>


    );
};

export default Maker;