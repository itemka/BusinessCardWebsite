import React from 'react';
import css from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";
import html5 from '../../../Files/IconSkills/icons8-html-5.svg';
import css3 from '../../../Files/IconSkills/icons8-css3.svg';
import react from '../../../Files/IconSkills/icons8-react-native.svg';
import redux from '../../../Files/IconSkills/0_U2DmhXYumRyXH6X1.png';
import js from '../../../Files/IconSkills/icons8-javascript.svg';
import git from '../../../Files/IconSkills/icons8-git.svg';
import github from '../../../Files/IconSkills/icons8-github-96(2).png';

class Skills extends React.Component {
    state = {
        skills: [
            {id: 1, icon: html5, skillTitle: `HTML5`, skillText: `testtest test test test test test vv vtest`},
            {id: 2, icon: css3, skillTitle: `CSS3`, skillText: `testtesttesttest test test test v vv`},
            {id: 3, icon: js, skillTitle: `JS (ES6)`, skillText: `hjeb gehjrb gehrbgaehrb gjabjar `},
            {id: 4, icon: react, skillTitle: `React`, skillText: `Proagndajrgnjadrng ects`},
            {id: 5, icon: redux, skillTitle: `Redux`, skillText: `Co njrg ntacts`},
            {id: 6, icon: git, skillTitle: `git`, skillText: `Cqkjreng jb  rkekg bkbbb kjgr bg kqrg kbb jekr qkegb kergkqe gk ontacts`},
            {id: 6, icon: github, skillTitle: `github`, skillText: `Cqkjreng jb  rkekg bkbbb kjgr bg kqrg kbb jekr qkegb kergkqe gk ontacts`},
        ]
    };
    render() {
        let skills = this.state.skills.map(item=> <SkillsItem id={item.id} icon={item.icon} skillTitle={item.skillTitle} skillText={item.skillText}/>);
        return (
            <section id={"Skills"} className={`${css.Skills}`}>
                <div className={css.borderSectionThree}>
                    <div className={css.headerSkills}>
                        <GeneralTitle text={`My Skills`}/>
                    </div>
                    <div className={css.mainSkills}>
                        {skills}
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;