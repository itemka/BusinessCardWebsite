import React from 'react';
import css from './OrderCall.module.css';
import ButtonSendMessage from "../Contacts/SendMessage/ButtonSendMessage/ButtonSendMessage";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";
import Flip from "react-reveal/Flip";

const OrderCall = () => {
    return (
        <section id={"OrderCall"} className={`${css.sectionOne} ${css.sectionFive}`}>
            <Flip left>
                <div className={css.title}>
                    <GeneralTitle text={`I will contact you!`}/>
                </div>
                <div className={css.borderAround}>
                    <div className={css.sectionOneDiv}>
                        <div className={css.myText}>Submit your application</div>
                        <ButtonSendMessage type={`text`} className={css.buttonCall} placeholder={`Name`}/>
                        <ButtonSendMessage type={`number`} className={css.buttonCall}
                                           placeholder={`+375(29) 233-39-07`}/>
                        <textarea className={css.message} placeholder={`Message`} rows={`4`}>{}</textarea>
                        <div className={css.changeButton}>
                            <ButtonSendMessage type={`button`} className={`${css.sendCall} ${css.beFor}`}
                                               value={`Send?`}/>
                            <ButtonSendMessage type={`button`} className={`${css.sendCall} ${css.After}`}
                                               value={`Yes!`}/>
                        </div>
                        {/**/}
                    </div>
                </div>
            </Flip>
        </section>
    );
};

export default OrderCall;
