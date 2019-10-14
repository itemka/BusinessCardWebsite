import React from 'react';
import css from './Projects.module.css';
import './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";
import Laptop_mp4 from "../../../Files/Video/Laptop.mp4";
import Laptop_webm from "../../../Files/Video/Laptop.webm";

import socialNetwork from '../../../Files/Images/SocialNetwork.png';
import ToDoList from '../../../Files/Images/ToDoList.png';
import github
    from '../../../Files/Images/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png';
import i9 from '../../../Files/Images/slide-bg-1.jpg';
import counter from '../../../Files/Images/counter.png';
import counter2 from '../../../Files/Images/counter2.png';

const FILTER_ALL = `All`;
const FILTER_COUNTER = `Counter`;
const FILTER_GAME = `Game`;
const FILTER_GITHUB = `GitHub`;

class Projects extends React.Component {
    state = {
        projects: [
            {
                id: 1,
                image: socialNetwork,
                filter: null,
                projectTitle: `Social network`,
                projectText: `testtest test test test test test vv vtest`
            },
            {
                id: 2,
                image: ToDoList,
                filter: null,
                projectTitle: `To do List`,
                projectText: `testtesttesttest test test test v vv`
            },
            {
                id: 3,
                image: counter,
                filter: FILTER_COUNTER,
                projectTitle: `Counter (setState)`,
                projectText: `hjeb gehjrb gehrbgaehrb gjabjar `
            },
            {
                id: 4,
                image: counter2,
                filter: FILTER_COUNTER,
                projectTitle: `Counter (Redux)`,
                projectText: `Proagndajrgnjadrng ects`
            },
            {
                id: 5, image: i9, filter: FILTER_GAME, projectTitle: `React Dog Game`, projectText: `Co njrg ntacts`
            },
            {
                id: 6,
                image: github,
                filter: FILTER_GITHUB,
                projectTitle: `GitHub.com`,
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