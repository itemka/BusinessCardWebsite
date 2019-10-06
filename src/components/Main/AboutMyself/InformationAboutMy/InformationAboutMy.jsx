import React from 'react';
import css from './InformationAboutMy.module.css';

const InformationAboutMy = () => {
    return (
        <h1 className={css.infoAboutMyself}>
            <div>Привет! Дописать Junior</div>
            <div><span>Меня зовут</span><span>Павленко Артем</span></div>
            <div><span>I am </span><span>Frontend Developer</span></div>
            <div><span>JS</span><span>React</span><span>Redux</span></div>
        </h1>
    );
};

export default InformationAboutMy;
