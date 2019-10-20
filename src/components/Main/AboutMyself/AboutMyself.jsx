import React from 'react';
import css from './AboutMyself.module.css';
import iPhoto from './../../../Files/Images/item_ka.jpg';
import InformationAboutMy from "./InformationAboutMy/InformationAboutMy";
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';
import {particlesBackground} from "../../../index";

const AboutMyself = () => {
    return (
        <>
            <Particles params={particlesBackground} className={css.particles}/>
            <section id={'Home'} className={`${css.sectionOne} ${css.background}`}>

                <Fade left>
                    <InformationAboutMy/>
                    <div className={css.blockPhoto}>
                        <img className={css.myPhoto} src={iPhoto} alt="Pavlenko Artsem"/>
                        <img className={css.myPhoto} src={iPhoto} alt="Pavlenko Artsem"/>
                        <img className={css.myPhoto} src={iPhoto} alt="Pavlenko Artsem"/>
                        <img className={css.myPhoto} src={iPhoto} alt="Pavlenko Artsem"/>
                    </div>
                </Fade>
            </section>
        </>
    );
};

export default AboutMyself;
