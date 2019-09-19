import React from 'react';
import css from './SectionThree.module.css';

const SectionThree = () => {
    return (
        <section className={`${css.sectionOne} ${css.sectionThree}`}>
            <div className={css.sectionOneDiv}>скил</div>
        </section>
    );
};

export default SectionThree;
