import React from 'react';
import css from './ScillsItem.module.css';

const ScillsItem = () => {
    return (
        <div className={css.ScillsItem}>
            <div className={css.ScillsItemTop}>
                <div className={css.textOnShadows}>1 dit</div>
            </div>
            <div className={css.ScillsItemBottom}>
                <div className={css.textBelowShadows}>2 dit</div>
            </div>
        </div>
    );
};

export default ScillsItem;
