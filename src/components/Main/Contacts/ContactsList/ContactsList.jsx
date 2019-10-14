import React from 'react';
import css from './ContactsList.module.css';

const ContactsList = () => {
    return (
        <div>
            <div className={css.contactsList}>
                <span>PHONE :</span>
                <div className={css.Information}><a href="#">+375 (29) 233-39-07</a></div>
            </div>
            <div className={css.contactsList}>
                <span>ADDRESS :</span>
                <div className={css.Information}><a href="https://yandex.by/maps/-/CGw1aYYa">г. Минск, Переулок Софьи Ковалевской 55</a></div>
            </div>
            <div className={css.contactsList}>
                <span>EMAIL :</span>
                <div className={css.Information}>
                    <div><a href="#">itemka2503@gmail.com</a></div>
                    <div><a href="#">itemka2503@yandex.by</a></div>
                </div>
            </div>
        </div>
    );
};

export default ContactsList;
