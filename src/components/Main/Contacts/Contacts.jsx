import React from 'react';
import css from './Contacts.module.css';
import SendMessage from "./SendMessage/SendMessage";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";

const Contacts = () => {
    return (
        <section className={`${css.sectionOne} ${css.sectionSix}`}>
            <div className={css.borderSectionSix}>
                <div className={css.contactsTitleBorder}>
                    <GeneralTitle text={`Контакты`}/>
                </div>
                <div className={css.contactsListBorder}>
                    <div className={css.contactsList}>contactsList</div>
                </div>
                <div className={css.sendMessageToEmailBorder}>
                    <SendMessage/>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
