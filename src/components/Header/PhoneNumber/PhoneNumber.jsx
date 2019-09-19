import React from 'react';
import css from './PhoneNumber.module.css';

const PhoneNumber = () => {
    return (
        <span className={css.blockNumber}>
            <div className={css.numberPhone}>
                <span className={css.imagePhpne}/>  <span className={css.numberCode}>+375 (29)</span> 233-39-07
            </div>
            <div className={css.orderCall}>Заказать звонок</div>
        </span>
    );
};

export default PhoneNumber;
