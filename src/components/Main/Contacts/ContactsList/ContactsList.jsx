import React from 'react';
import css from './ContactsList.module.css';

const ContactsList = () => {
    return (
        <div>
            <div className={css.contactsList}>
                <span>PHONE :</span>
                <div className={css.Information}>+375 (29) 233-39-07</div>
            </div>
            <div className={css.contactsList}>
                <span>ADDRESS :</span>
                <div className={css.Information}>г. Минск, Переулок Софьи Ковалевской 55</div>
            </div>
            <div className={css.contactsList}>
                <span>EMAIL :</span>
                <div className={css.Information}>
                    <div>itemka2503@gmail.com</div>
                    <div>itemka2503@yandex.by</div>
                </div>
            </div>
        </div>
    );
};

export default ContactsList;
