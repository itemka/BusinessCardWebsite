import React from 'react';
import css from './Projects.module.css';
import './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";
import GeneralTitle from "../../GeneralTitle/GeneralTitle";
// import Laptop_mp4 from "../../../Files/Video/Laptop.mp4";
// import Laptop_webm from "../../../Files/Video/Laptop.webm";

import socialNetwork from '../../../Files/Images/SocialNetwork.png';
import ToDoList from '../../../Files/Images/ToDoList.png';
import i9 from '../../../Files/Images/slide-bg-1.jpg';
import counter from '../../../Files/Images/counter.png';
import counter2 from '../../../Files/Images/counter2.png';
import testTasksPosts from '../../../Files/Images/testTasksPosts.png';

const FILTER_ALL = `All`;
const FILTER_COUNTER = `Counter`;
const FILTER_GAME = `Game`;
const TEST_TASKS = `Test tasks`;

class Projects extends React.Component {
    state = {
        projects: [
            {
                id: 1,
                image: socialNetwork,
                filter: null,
                link: "https://itemka.github.io/SocialNetworkApp/",
                viewCode: "https://github.com/itemka/SocialNetworkApp",
                projectTitle: `Social network. Used React/Redux`,
                projectText: `After school, Kamal took the girls to the old house. It was very old and very dirty too.`
            },
            {
                id: 2,
                image: ToDoList,
                filter: null,
                link: "https://itemka.github.io/ToDoList2/",
                viewCode: "https://github.com/itemka/ToDoList2",
                projectTitle: `To do List. Learned to make requests using Rest api and axios`,
                projectText: `After school, Kamal took the girls to the old house. It was very old and very dirty too.`
            },
            {
                id: 3,
                image: counter,
                filter: FILTER_COUNTER,
                link: "https://itemka.github.io/Counter-setState-/",
                viewCode: "https://github.com/itemka/Counter-setState-",
                projectTitle: `Counter (wrote using setState)`,
                projectText: `Next evening was Halloween. The girls were at the school disco. “Are you better now?” asked Tara.`
            },
            {
                id: 4,
                image: counter2,
                filter: FILTER_COUNTER,
                link: "https://itemka.github.io/Counter-Redux-/",
                viewCode: "https://github.com/itemka/Counter-Redux-",
                projectTitle: `Counter (wrote using Redux)`,
                projectText: `The next morning, Amy’s mum and dad were listening to the radio. “Is Amy up yet?” Dad asked.`
            },
            {
                id: 5,
                image: i9,
                filter: FILTER_GAME,
                link: "https://itemka.github.io/ReactDogApp/",
                viewCode: "https://github.com/itemka/ReactDogApp",
                projectTitle: `React Dog Game. Used React/Redux`,
                projectText: `“Hi Amy! Your mum sent me a text. You forgot your inhaler. Why don’t you turn your phone on?” Amy didn’t like technology.`
            },
            {
                id: 6,
                image: testTasksPosts,
                filter: TEST_TASKS,
                link: "https://itemka.github.io/testTaskPosts/",
                viewCode: "https://github.com/itemka/testTaskPosts",
                projectTitle: `Test task posts. Used React/Redux. Login: Admin, Password: 123123`,
                projectText: `“Hi Amy! Your mum sent me a text. You forgot your inhaler. Why don’t you turn your phone on?” Amy didn’t like technology.`
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
                                        projectText={item.projectText}
                                        filter={item.filter}
                                        link={item.link}
                                        viewCode={item.viewCode}/>
                } else if (this.state.filterValue === item.filter) {
                    return <ProjectItem id={item.id} image={item.image}
                                        projectTitle={item.projectTitle}
                                        projectText={item.projectText}
                                        filter={item.filter}
                                        link={item.link}
                                        viewCode={item.viewCode}/>
                }
            }
        );

        let classForAll = this.state.filterValue === FILTER_ALL ? css.buttonActive : css.buttonNotActive;
        let classForCounter = this.state.filterValue === FILTER_COUNTER ? css.buttonActive : css.buttonNotActive;
        let classForGame = this.state.filterValue === FILTER_GAME ? css.buttonActive : css.buttonNotActive;
        let classForTestTasks = this.state.filterValue === TEST_TASKS ? css.buttonActive : css.buttonNotActive;
        return (
            <section id={"Projects"} className={`${css.Projects}`}>
                {/*<div className={css.video_bg}>*/}
                {/*    <video width={`100%`} height={`auto`} preload={`auto`} autoPlay={`autoplay`} loop={`loop`}>*/}
                {/*        <source src={`Laptop_mp4`} type={`video/mp4`}/>*/}
                {/*        <source src={`Laptop_webm`} type={`video/webm`}/>*/}
                {/*    </video>*/}
                {/*</div>*/}
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
                            <div onClick={() => this.changeFilter(TEST_TASKS)}
                                 className={`${css.buttonFilter} ${classForTestTasks}`}>{TEST_TASKS}</div>
                        </div>
                        {projects}
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;