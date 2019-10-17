import React from 'react';
import css from './AboutMyself.module.css';
import iPhoto from './../../../Files/Images/F36ACF47-E4BD-473C-928C-6CD03CCF4B0C.jpg';
import InformationAboutMy from "./InformationAboutMy/InformationAboutMy";
import Fade from 'react-reveal/Fade';

const AboutMyself = () => {
    return (
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
    );
};

export default AboutMyself;
