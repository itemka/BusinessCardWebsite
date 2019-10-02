import React from 'react';
import css from './SectionSix.module.css';
import SendMessage from "./SendMessage/SendMessage";

const SectionSix = () => {
    return (
        <section className={`${css.sectionOne} ${css.sectionSix}`}>
            <div className={css.borderSectionSix}>
                <div className={css.contactsTitleBorder}>
                    <div className={css.contactsTitle}>contactsTitle</div>
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

export default SectionSix;
