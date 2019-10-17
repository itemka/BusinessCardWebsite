import React from 'react';
import css from './Contacts.module.css';
import SendMessage from "./SendMessage/SendMessage";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";
import ContactsList from "./ContactsList/ContactsList";
import Zoom from "react-reveal/Zoom";

const Contacts = () => {
    return (
        <section id={"Contacts"} className={`${css.sectionOne} ${css.sectionSix}`}>
            <Zoom>
                <div className={css.borderSectionSix}>
                    <div className={css.contactsTitleBorder}>
                        <GeneralTitle text={`My Contacts`}/>
                    </div>
                    <div className={css.contactsListBorder}>
                        <ContactsList/>
                    </div>
                    <div className={css.sendMessageToEmailBorder}>
                        <SendMessage/>
                    </div>
                </div>
            </Zoom>
        </section>
    );
};

export default Contacts;
