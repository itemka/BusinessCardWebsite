import React from 'react';
import css from './AboutMyself.module.css';
import iPhoto from './../../../Files/Images/F36ACF47-E4BD-473C-928C-6CD03CCF4B0C.jpg';
import InformationAboutMy from "./InformationAboutMy/InformationAboutMy";

const AboutMyself = () => {
    return (
        <section id={'web'} className={`${css.sectionOne} ${css.background}`}>
            <InformationAboutMy/>
            <div className={css.blockPhoto}>
                <img className={css.myPhoto} src={iPhoto} alt="Pavlenko Artsem"/>
                <img className={css.myPhoto} src={iPhoto} alt="Pavlenko Artsem"/>
                <img className={css.myPhoto} src={iPhoto} alt="Pavlenko Artsem"/>
                <img className={css.myPhoto} src={iPhoto} alt="Pavlenko Artsem"/>
            </div>
        </section>
    );
};

export default AboutMyself;
