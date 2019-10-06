import React from 'react';
import css from './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";

const Projects = () => {
    return (
        <section className={`${css.sectionOne} ${css.sectionFour}`}>

            <div className={css.borderSectionFour}>

                <div className={css.headerProject}>
                    <GeneralTitle text={`Проекты`}/>
                </div>
                <div className={css.mainProject}>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>

            </div>

        </section>
    );
};

export default Projects;
