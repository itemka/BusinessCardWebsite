import React from 'react';
import css from './Header.module.css';
import NavLink from "./Nav/NavLink";

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.headerTop}>
                <NavLink/>
            </div>
        </header>
    );
};

export default Header;
