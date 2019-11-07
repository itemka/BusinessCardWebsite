import React from 'react';
import css from './Skills.module.css';
import SkillsItem from "./SkillsItem/SkillsItem";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";
import html5 from '../../../Files/IconSkills/icons8-html-5.svg';
import css3 from '../../../Files/IconSkills/icons8-css3.svg';
import react from '../../../Files/IconSkills/icons8-react-native.svg';
import redux from '../../../Files/IconSkills/0_U2DmhXYumRyXH6X1.png';
import js from '../../../Files/IconSkills/icons8-javascript.svg';
// import git from '../../../Files/IconSkills/icons8-git.svg';
import github from '../../../Files/IconSkills/icons8-github-96(2).png';

class Skills extends React.Component {
    state = {
        skills: [
            {
                id: 1,
                icon: html5,
                skillTitle: `HTML5`,
                skillText: `I used basic tags, links, tables, form tags and HTML5 tags, HTML5 forms`
            },
            {
                id: 2,
                icon: css3,
                skillTitle: `CSS3`,
                skillText: `I used the standard cascading style sheet, context and neighboring selectors, pseudo-classes, building grids (float, inline-block, flex, and some grid), adaptive mark-up for different resolutions, css-modules into React`
            },
            {
                id: 3,
                icon: js,
                skillTitle: `JS (ES6)`,
                skillText: `Worked with conditions, loops, arrays, functions, objects, promise`
            },
            {
                id: 4,
                icon: react,
                skillTitle: `React`,
                skillText: `FLAX architecture, components, props, callback, class, life cycle methods, state, localState, css-modules, routing, select/reselect`
            },
            {
                id: 5,
                icon: redux,
                skillTitle: `Redux`,
                skillText: `Reducer, action, thunk, axios, hoc(connect, compose), redux form, work with rest api`
            },
        ]
    };

    render() {
        let skills = this.state.skills.map(item => <SkillsItem id={item.id} icon={item.icon}
                                                               skillTitle={item.skillTitle}
                                                               skillText={item.skillText}/>);
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