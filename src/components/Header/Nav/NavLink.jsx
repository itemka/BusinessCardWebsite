import React from 'react';
import css from './NavLink.module.css';
import PhoneNumber from "../PhoneNumber/PhoneNumber";

class NavLink extends React.Component {

    state = {
        nav: [`главная`, `обо мне`, `скил`, `проекты`, `контакты`]
    };

    render() {
        let navLink = this.state.nav.map(item => {
            return (<div className={css.navItem}>{item}</div>)
        });
        return (
            <nav className={css.nav}>
                {navLink}
                <PhoneNumber/>
            </nav>
        );
    }
};

export default NavLink;
