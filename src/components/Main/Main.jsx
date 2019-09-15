import React from 'react';
import css from './Main.module.css'

const Main = () => {
    return (
        <main>
            <section className={`${css.sectionOne}`}>
                <div className={css.sectionOneDiv}>главная</div>
            </section>
            <section className={`${css.sectionOne} ${css.sectionTwo}`}>
                <div className={css.sectionOneDiv}>обо мне</div>
            </section>
            <section className={`${css.sectionOne} ${css.sectionThree}`}>
                <div className={css.sectionOneDiv}>скил</div>
            </section>
            <section className={`${css.sectionOne} ${css.sectionFour}`}>
                <div className={css.sectionOneDiv}>проекты</div>
            </section>
            <section className={`${css.sectionOne} ${css.sectionFive}`}>
                <div className={css.sectionOneDiv}>заказать звонок</div>
            </section>
            <section className={`${css.sectionOne} ${css.sectionSix}`}>
                <div className={css.sectionOneDiv}>контакты</div>
            </section>
        </main>
    );
};

export default Main;
