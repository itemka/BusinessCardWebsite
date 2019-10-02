import React from 'react';
import css from './SendMessage.module.css';
import ButtonSendMessage from "./ButtonSendMessage/ButtonSendMessage";

const SendMessage = () => {
    return (
        <div className={css.sendMessageToEmail}>
            <ButtonSendMessage type={`text`} className={css.buttonName} placeholder={`Name`}/>
            <ButtonSendMessage type={`test`} className={css.buttonEmail} placeholder={`Email`}/>
            <ButtonSendMessage type={`text`} className={css.buttonSubject} placeholder={`Subject`}/>
            <ButtonSendMessage type={`text`} className={css.buttonMessage} placeholder={`Message`}/>
            <ButtonSendMessage type={`button`} className={css.sendMessage} value={`Send Message`}/>
        </div>
    );
};

export default SendMessage;
