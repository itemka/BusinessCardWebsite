import React from 'react';
import css from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";

const Skills = () => {
    return (
        <section id={"Skills"} className={`${css.sectionOne} ${css.sectionThree}`}>

            <div className={css.borderSectionThree}>

                <div className={css.headerSkills}>
                    <GeneralTitle text={`Навыки`}/>
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
