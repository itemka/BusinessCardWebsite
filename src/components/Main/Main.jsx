import React from 'react';
import AboutMyself from "./AboutMyself/AboutMyself";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import OrderCall from "./OrderCall/OrderCall";
import Contacts from "./Contacts/Contacts";

const Main = () => {
    return (
        <main>
            <AboutMyself/>
            <Skills/>
            <Projects/>
            <OrderCall/>
            <Contacts/>
        </main>
    );
};

export default Main;
