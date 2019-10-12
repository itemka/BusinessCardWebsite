import React from 'react';
import css from './OrderCall.module.css';
import ButtonSendMessage from "../Contacts/SendMessage/ButtonSendMessage/ButtonSendMessage";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";

const OrderCall = () => {
    return (
        <section id={"OrderCall"} className={`${css.sectionOne} ${css.sectionFive}`}>
            <div className={css.title}>
                <GeneralTitle text={`Я сам с вами свяжусь`}/>
            </div>
            <div className={css.borderAround}>
                <div className={css.sectionOneDiv}>
                    <div className={css.myText}>Оставить заявку</div>
                    <ButtonSendMessage type={`text`} className={css.buttonCall} placeholder={`Введите имя`}/>
                    <ButtonSendMessage type={`number`} className={css.buttonCall} placeholder={`+375(29) 233-39-07`}/>
                    <textarea className={css.message} placeholder={`Сообщение`} rows={`4`}>{}</textarea>
                    <div className={css.changeButton}>
                        <ButtonSendMessage type={`button`} className={`${css.sendCall} ${css.beFor}`} value={`ОТПРАВИТЬ`}/>
                        <ButtonSendMessage type={`button`} className={`${css.sendCall} ${css.After}`} value={`GO!`}/>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default OrderCall;
