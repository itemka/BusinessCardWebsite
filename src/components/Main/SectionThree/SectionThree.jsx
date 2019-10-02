import React from 'react';
import css from './SectionThree.module.css';
import ScillsItem from "./ScillsItem/ScillsItem";

const SectionThree = () => {
    return (
        <section className={`${css.sectionOne} ${css.sectionThree}`}>

            <div className={css.borderSectionThree}>

                <div className={css.headerScills}>
                    <div className={css.scillsTitle}>scillsTitle</div>
                </div>
                <div className={css.mainScills}>
                    <ScillsItem/>
                    <ScillsItem/>
                    <ScillsItem/>
                </div>

            </div>

        </section>
    );
};

export default SectionThree;
