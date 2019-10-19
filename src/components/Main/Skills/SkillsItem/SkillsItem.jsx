import React from 'react';
import css from './SkillsItem.module.css';
import Fade from 'react-reveal/Fade';

const SkillsItem = props => {
    return (
        <Fade bottom>
            <div className={css.SkillsItem}>
                <div className={css.SkillsItemTop}>
                    <div className={css.BackGroundIcon}>
                        <img className={css.icon} src={props.icon} alt="html"/>
                    </div>
                    <div className={css.textAfterIcon}>{props.skillTitle}</div>
                </div>
                <div className={css.SkillsItemBottom}>
                    <div className={css.textBelowShadows}>{props.skillText}</div>
                </div>
            </div>
        </Fade>
    );
};

export default SkillsItem;
