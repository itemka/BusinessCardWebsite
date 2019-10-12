import React from 'react';
import './ReactBurgerMenu.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const ReactBurgerMenu = () => {
    return (
        <div className={"ReactBurgerMenu"}>
            <BurgerMenu pageWrapId={"page_wrap"} outerContainerId={"ReactBurgerMenu"}/>
        </div>
    );
};

export default ReactBurgerMenu;
