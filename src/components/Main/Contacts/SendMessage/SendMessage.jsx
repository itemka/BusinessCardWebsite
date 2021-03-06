import React from 'react';
import css from './SendMessage.module.css';
import ButtonSendMessage from "./ButtonSendMessage/ButtonSendMessage";
import Zoom from "react-reveal/Zoom";

const SendMessage = () => {
    return (
        <Zoom>
            <div className={css.sendMessageToEmail}>
                <ButtonSendMessage type={`text`} value={``} className={css.buttonName} placeholder={`Name`}/>
                <ButtonSendMessage type={`test`} value={``} className={css.buttonEmail} placeholder={`Email`}/>
                <ButtonSendMessage type={`text`} value={``} className={css.buttonSubject} placeholder={`Subject`}/>
                <textarea className={css.textAreaMessage} value={``} placeholder={`Message`}></textarea>
                <ButtonSendMessage type={`button`} className={css.sendMessage} value={`Send`}/>
            </div>
        </Zoom>
    );
};

export default SendMessage;
