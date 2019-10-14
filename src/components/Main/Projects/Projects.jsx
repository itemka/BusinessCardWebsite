import React from 'react';
import css from './Projects.module.css';
import './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";
import Laptop_mp4 from "../../../Files/Video/Laptop.mp4";
import Laptop_webm from "../../../Files/Video/Laptop.webm";

import i3 from '../../../Files/Images/bg.jpg';
import i4 from '../../../Files/Images/computer.jpg';
import i5 from '../../../Files/Images/home-bg.jpg';
import i8 from '../../../Files/Images/photo-1508830524289-0adcbe822b40.jpeg';
import i9 from '../../../Files/Images/slide-bg-1.jpg';
import i11 from '../../../Files/Images/wp2465927-javascript-wallpapers.jpg';

const FILTER_ALL = `All`;
const FILTER_COUNTER = `Counter`;
const FILTER_GAME = `Game`;
const FILTER_GITHUB = `GitHub`;

class Projects extends React.Component {
    state = {
        projects: [
            {
                id: 1,
                image: i3,
                filter: null,
                projectTitle: `Social network`,
                projectText: `testtest test test test test test vv vtest`
            },
            {
                id: 2,
                image: i4,
                filter: null,
                projectTitle: `To do List`,
                projectText: `testtesttesttest test test test v vv`
            },
            {
                id: 3,
                image: i5,
                filter: FILTER_COUNTER,
                projectTitle: `Counter (setState)`,
                projectText: `hjeb gehjrb gehrbgaehrb gjabjar `
            },
            {
                id: 4,
                image: i11,
                filter: FILTER_COUNTER,
                projectTitle: `Counter (Redux)`,
                projectText: `Proagndajrgnjadrng ects`
            },
            {
                id: 5, image: i9, filter: FILTER_GAME, projectTitle: `React Dog Game`, projectText: `Co njrg ntacts`
            },
            {
                id: 6,
                image: i8,
                filter: FILTER_GITHUB,
                projectTitle: `These projects on github.com`,
                projectText: `Cqkjreng jb  rkekg bkqkegb kergkqe gk ontacts`
            },
        ],
        filterValue: FILTER_ALL,
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue});
    };

    render() {
        let projects = this.state.projects.map(item => {
                if (this.state.filterValue === FILTER_ALL) {
                    return <ProjectItem id={item.id} image={item.image}
                                        projectTitle={item.projectTitle}
                                        projectText={item.projectText} filter={item.filter}/>
                } else if (this.state.filterValue === item.filter) {
                    return <ProjectItem id={item.id} image={item.image}
                                        projectTitle={item.projectTitle}
                                        projectText={item.projectText} filter={item.filter}/>
                }
            }
        );

        let classForAll = this.state.filterValue === FILTER_ALL ? css.buttonActive : css.buttonNotActive;
        let classForCounter = this.state.filterValue === FILTER_COUNTER ? css.buttonActive : css.buttonNotActive;
        let classForGame = this.state.filterValue === FILTER_GAME ? css.buttonActive : css.buttonNotActive;
        let classForGitHub = this.state.filterValue === FILTER_GITHUB ? css.buttonActive : css.buttonNotActive;
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
                        <div className={css.buttons}>
                            <div onClick={() => this.changeFilter(FILTER_ALL)}
                                    className={`${css.buttonFilter} ${classForAll}`}>{FILTER_ALL}</div>
                            <div onClick={() => this.changeFilter(FILTER_COUNTER)}
                                    className={`${css.buttonFilter} ${classForCounter}`}>{FILTER_COUNTER}
                            </div>
                            <div onClick={() => this.changeFilter(FILTER_GAME)}
                                    className={`${css.buttonFilter} ${classForGame}`}>{FILTER_GAME}</div>
                            <div onClick={() => this.changeFilter(FILTER_GITHUB)}
                                    className={`${css.buttonFilter} ${classForGitHub}`}>{FILTER_GITHUB}
                            </div>
                        </div>
                        {projects}
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;