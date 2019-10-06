import React from 'react';
import css from './AboutMyself.module.css';
import iPhoto from './../../../Files/Images/F36ACF47-E4BD-473C-928C-6CD03CCF4B0C.jpg';

const AboutMyself = () => {
    return (
        <section id={'web'} className={`${css.sectionOne}`}>
            <h1 className={css.infoAboutMyself}>
                <div>Привет всем!</div>
                <div><span>Меня зовут</span><span>Павленко Артем</span></div>
                <div><span>I am </span><span>Frontend Developer</span></div>
                <div>JS/React/Redux</div>
            </h1>
            <div className={css.blokFoto}>
                <img className={css.myFoto} src={iPhoto} alt="" Pavlenko Artsem/>
                <img className={css.myFoto} src={iPhoto} alt="" Pavlenko Artsem/>
                <img className={css.myFoto} src={iPhoto} alt="" Pavlenko Artsem/>
                <img className={css.myFoto} src={iPhoto} alt="" Pavlenko Artsem/>
            </div>
        </section>
    );
};

export default AboutMyself;
