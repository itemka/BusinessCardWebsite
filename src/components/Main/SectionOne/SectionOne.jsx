import React from 'react';
import css from './SectionOne.module.css';
import iPhoto from './../../../Files/Images/F36ACF47-E4BD-473C-928C-6CD03CCF4B0C.jpg';

const SectionOne = () => {
    return (
        <section id={'web'} className={`${css.sectionOne}`}>
            <div className={css.blokFoto}>
                <img className={css.myFoto} src={iPhoto} alt="" Pavlenko Artsem/>
                <img className={css.myFoto} src={iPhoto} alt="" Pavlenko Artsem/>
                <img className={css.myFoto} src={iPhoto} alt="" Pavlenko Artsem/>
                <img className={css.myFoto} src={iPhoto} alt="" Pavlenko Artsem/>
            </div>
            <div className={css.infoAboutMyself}>
                As so seeing latter he should thirty whence. How one dull get busy dare far. To sure calm much most
                long me mean. Now summer who day looked our behind moment coming.
            </div>
        </section>
);
};

export default SectionOne;
