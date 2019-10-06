import React from 'react';
import css from './SkillsItem.module.css';

const SkillsItem = () => {
    return (
        <div className={css.SkillsItem}>
            <div className={css.SkillsItemTop}>
                <div className={css.textOnShadows}>1 dit</div>
            </div>
            <div className={css.SkillsItemBottom}>
                <div className={css.textBelowShadows}>2 dit</div>
            </div>
        </div>
    );
};

export default SkillsItem;
