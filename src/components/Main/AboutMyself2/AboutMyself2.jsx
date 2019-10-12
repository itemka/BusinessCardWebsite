import React from 'react';
import css from './AboutMyself2.module.css';
import Laptop_mp4 from "../../../Files/Video/Laptop.mp4";
import Laptop_webm from "../../../Files/Video/Laptop.webm";

const AboutMyself2 = () => {
    return (
        <section id={"AboutMyself2"} className={`${css.sectionTwo}`}>
            <div className={css.video_bg}>
                <video width={`100%`} height={`auto`} preload={`auto`} autoPlay={`autoplay`} loop={`loop`}>
                    <source src={Laptop_mp4} type={`video/mp4`}/>
                    <source src={Laptop_webm} type={`video/webm`}/>
                </video>
            </div>
            <div className={''}><h1>обо мне</h1></div>
        </section>
    );
};

export default AboutMyself2;
