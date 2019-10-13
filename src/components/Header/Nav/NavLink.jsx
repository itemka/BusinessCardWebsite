import React from 'react';
import css from './NavLink.module.css';
import PhoneNumber from "../PhoneNumber/PhoneNumber";

class NavLink extends React.Component {

    state = {
        nav: [
            {id: 1, navName: `Home`, path: `Home`},
            {id: 2, navName: `Skills`, path: `Skills`},
            {id: 3, navName: `Projects`, path: `Projects`},
            {id: 4, navName: `Contacts`, path: `Contacts`}
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
