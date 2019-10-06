import React from 'react';
import css from './GeneralTitle.module.css';

const GeneralTitle = props => {
    return (
        <div className={css.borderTitle}>
            <h1 className={css.generalTitle}>{props.text}</h1>
            <div className={css.afterTitle}></div>
        </div>
    );
};

export default GeneralTitle;
