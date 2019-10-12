import React from 'react';
import css from './NavLink.module.css';
import PhoneNumber from "../PhoneNumber/PhoneNumber";

class NavLink extends React.Component {

    state = {
        nav: [
            {id: 1, navName: `главная`, path: `AboutMyself`},
            {id: 2, navName: `обо мне`, path: `AboutMyself2`},
            {id: 3, navName: `Навыка`, path: `Skills`},
            {id: 4, navName: `проекты`, path: `Projects`},
            {id: 5, navName: `контакты`, path: `Contacts`}
        ]
    };

    render() {
        let navLink = this.state.nav.map(item => {
            return (<a href={`#${item.path}`} key={item.id} className={css.navItem}>{item.navName}</a>)
        });
        return (
            <nav className={css.nav}>
                {navLink}
                <PhoneNumber/>
            </nav>
        );
    }
}

export default NavLink;
