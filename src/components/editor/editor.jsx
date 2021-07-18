import React from 'react';
import Card_edit_form from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';
import Cardaddform from '../card_add_form/card_add_form'

const Editor = ({ Fileinput, cards, addCard, updateCard, deleteCard }) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {Object.keys(cards).map(key => (
            <Card_edit_form
                key={key}
                Fileinput={Fileinput}
                card={cards[key]}
                updateCard={updateCard}
                deleteCard={deleteCard} />
        ))}
        <Cardaddform Fileinput={Fileinput} onAdd={addCard} />
    </section>

)
export default Editor;