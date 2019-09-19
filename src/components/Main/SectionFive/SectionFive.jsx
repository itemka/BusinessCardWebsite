import React from 'react';
import css from './SectionFive.module.css';

const SectionFive = () => {
    return (
        <section className={`${css.sectionOne} ${css.sectionFive}`}>
            <div className={css.sectionOneDiv}>заказать звонок</div>
        </section>
    );
};

export default SectionFive;
