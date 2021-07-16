import React from 'react';
import Card_edit_form from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';
import Cardaddform from '../card_add_form/card_add_form'

const Editor = ({ cards, addCard }) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {cards.map(card => (
            <Card_edit_form key={card.id} card={card} />
        ))}
        <Cardaddform onAdd={addCard} />
    </section>

)
export default Editor;