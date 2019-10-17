import React from 'react';
import css from './PhoneNumber.module.css';

const PhoneNumber = () => {
    return (
        <span className={css.blockNumber}>
            <div className={css.numberPhone}>
                <a href={"tel:+375292333907"}
                   className={css.Link}
                   type={"number"}>
                    <span className={css.imagePhpne}/>
                    <span className={css.numberCode}>+375 (29)</span>233-39-07</a>
            </div>
            <a href={"#OrderCall"} className={css.orderCall}>Request a call</a>
        </span>
    );
};

export default PhoneNumber;