import React from 'react';
import css from './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";
import Laptop_mp4 from "../../../Files/Video/Laptop.mp4";
import Laptop_webm from "../../../Files/Video/Laptop.webm";
import html5 from "../../../Files/IconSkills/icons8-html-5.svg";
import css3 from "../../../Files/IconSkills/icons8-css3.svg";
import js from "../../../Files/IconSkills/icons8-javascript.svg";
import react from "../../../Files/IconSkills/icons8-react-native.svg";
import redux from "../../../Files/IconSkills/0_U2DmhXYumRyXH6X1.png";
import git from "../../../Files/IconSkills/icons8-git.svg";

class Projects extends React.Component {
    state = {
        projects: [
            {id: 1, image: html5, projectTitle: `Social network`, projectText: `testtest test test test test test vv vtest`},
            {id: 2, image: css3, projectTitle: `To do List`, projectText: `testtesttesttest test test test v vv`},
            {id: 3, image: js, projectTitle: `Counter (setState)`, projectText: `hjeb gehjrb gehrbgaehrb gjabjar `},
            {id: 4, image: react, projectTitle: `Counter (Redux)`, projectText: `Proagndajrgnjadrng ects`},
            {id: 5, image: redux, projectTitle: `React Dog Game`, projectText: `Co njrg ntacts`},
            {id: 6, image: git, projectTitle: `These projects on github.com`, projectText: `Cqkjreng jb  rkekg bkqkegb kergkqe gk ontacts`},
        ]
    };

    render() {
        let projects = this.state.projects.map(item => <ProjectItem id={item.id} image={item.image}
                                                                    projectTitle={item.projectTitle}
                                                                    projectText={item.projectText}/>);
        return (
            <section id={"Projects"} className={`${css.Projects}`}>
                <div className={css.video_bg}>
                    <video width={`100%`} height={`auto`} preload={`auto`} autoPlay={`autoplay`} loop={`loop`}>
                        <source src={Laptop_mp4} type={`video/mp4`}/>
                        <source src={Laptop_webm} type={`video/webm`}/>
                    </video>
                </div>
                <div className={css.borderSectionFour}>

                    <div className={css.headerProject}>
                        <GeneralTitle text={`My Projects`}/>
                    </div>
                    <div className={css.mainProject}>
                        {projects}
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;