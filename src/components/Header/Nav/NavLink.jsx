import React from 'react';
import css from './NavLink.module.css';
import PhoneNumber from "../PhoneNumber/PhoneNumber";

class NavLink extends React.Component {

    state = {
        nav: [
            {id: 1, navName: `главная`},
            {id: 2, navName: `обо мне`},
            {id: 3, navName: `скил`},
            {id: 4, navName: `проекты`},
            {id: 5, navName: `контакты`}
        ]
    };

    render() {
        let navLink = this.state.nav.map(item => {
            return (<div className={css.navItem}>{item.navName}</div>)
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
