import React from 'react';
import css from './ContactsList.module.css';
import Zoom from "react-reveal/Zoom";

const ContactsList = () => {
    return (
        <Zoom>
            <div>
                <div className={css.contactsList}>
                    <span>PHONE :</span>
                    <div className={css.Information}><a href="tel:+375292333907">+375 (29) 233-39-07</a></div>
                </div>
                <div className={css.contactsList}>
                    <span>ADDRESS :</span>
                    <div className={css.Information}><a href="https://yandex.by/maps/-/CGw1aYYa">г. Минск, Переулок
                        Софьи Ковалевской 55</a></div>
                </div>
                <div className={css.contactsList}>
                    <span>EMAIL :</span>
                    <div className={css.Information}>
                        <div><a href="mailto: itemka2503@gmail.com">itemka2503@gmail.com</a></div>
                        <div><a href="mailto: itemka2503@yandex.by">itemka2503@yandex.by</a></div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default ContactsList;
