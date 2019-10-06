import React from 'react';
import css from './ButtonSendMessage.module.css';

const ButtonSendMessage = props => {
    return (
        <input className={`${props.className} ${css.button}`} type={props.type} value={props.value} name="" id="" placeholder={props.placeholder}/>
    );
};

export default ButtonSendMessage;
