import React from 'react';
import css from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";

const Skills = () => {
    return (
        <section className={`${css.sectionOne} ${css.sectionThree}`}>

            <div className={css.borderSectionThree}>

                <div className={css.headerSkills}>
                    <div className={css.SkillsTitle}><h1>SkillsTitle</h1></div>
                </div>
                <div className={css.mainSkills}>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                </div>

            </div>

        </section>
    );
};

export default Skills;
