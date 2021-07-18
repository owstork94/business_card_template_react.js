import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/headr';
import styles from './maker.module.css'
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ Fileinput, authService }) => {
    const [cards, setcards] = useState({
        1: {
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

        2: {
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
        3: {
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
    });
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

    // const addCard = card => {
    //     const updated = [...cards, card];
    //     setcards(updated);
    // };

    const createOrUpdateCard = card => {
        setcards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    };
    // const addCard = card => {
    //     const updated = [...cards, card];
    //     setcards(updated);
    // };

    const updateCard = card => {
        const updated = { ...cards };
        updated[card.id] = card;
        setcards(updated);
    };

    const deleteCard = card => {
        setcards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <section className={styles.cont}>
                <Editor
                    Fileinput={Fileinput}
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updateCard={updateCard}
                    deleteCard={deleteCard} />
                <Preview cards={cards} />
            </section>
            <Footer />
        </section>


    );
};

export default Maker;