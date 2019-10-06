import React from 'react';
import css from './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";

const Projects = () => {
    return (
        <section className={`${css.sectionOne} ${css.sectionFour}`}>

            <div className={css.borderSectionFour}>

                <div className={css.headerProject}>
                    <div className={css.projectTitle}><h1>projectTitle</h1></div>
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
