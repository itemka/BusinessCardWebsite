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
import Fade from 'react-reveal/Fade';

class Skills extends React.Component {
    state = {
        skills: [
            {
                id: 1,
                icon: html5,
                skillTitle: `HTML5`,
                skillText: `After school, Kamal took the girls to the old house. It was very old and very dirty too.`
            },
            {
                id: 2,
                icon: css3,
                skillTitle: `CSS3`,
                skillText: `After school, Kamal took the girls to the old house. It was very old and very dirty too.`
            },
            {
                id: 3,
                icon: js,
                skillTitle: `JS (ES6)`,
                skillText: `Next evening was Halloween. The girls were at the school disco. `
            },
            {
                id: 4,
                icon: react,
                skillTitle: `React`,
                skillText: `Next evening was Halloween. The girls were at the school disco. “Are you better now?” asked Tara.`
            },
            {
                id: 5,
                icon: redux,
                skillTitle: `Redux`,
                skillText: `The next morning, Amy’s mum and dad were listening to the radio. “Is Amy up yet?” Dad asked.`
            },
            // {id: 6, icon: git, skillTitle: `git`, skillText: `Cqkjreng jb  rkekg bkbbb kjgr bg kqrg kbb jekr qkegb kergkqe gk ontacts`},
            {
                id: 6,
                icon: github,
                skillTitle: `github`,
                skillText: `Kamal and Grant arrived. “Hi Kamal!” said Tara. “Are you going to the Halloween`
            },
        ]
    };

    render() {
        let skills = this.state.skills.map(item => <SkillsItem id={item.id} icon={item.icon}
                                                               skillTitle={item.skillTitle}
                                                               skillText={item.skillText}/>);
        return (
            <section id={"Skills"} className={`${css.Skills}`}>
                <Fade bottom>
                    <div className={css.borderSectionThree}>
                        <div className={css.headerSkills}>
                            <GeneralTitle text={`My Skills`}/>
                        </div>
                        <div className={css.mainSkills}>
                            {skills}
                        </div>
                    </div>
                </Fade>
            </section>
        )
    }
}

export default Skills;