import React from 'react';
import {stack as Menu} from 'react-burger-menu';
// import css from "../../Header/Nav/NavLink.module.css";
import PhoneNumber from "../../Header/PhoneNumber/PhoneNumber";

class BurgerMenu extends React.Component {
    state = {
        menuOpen: false,
        nav: [
            {id: 1, navName: `главная`, path: `AboutMyself`},
            {id: 2, navName: `обо мне`, path: `AboutMyself2`},
            {id: 3, navName: `Навыка`, path: `Skills`},
            {id: 4, navName: `проекты`, path: `Projects`},
            {id: 5, navName: `контакты`, path: `Contacts`}
        ],
    };

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    };

    closeMenu = (change) => {
        this.setState({menuOpen: change})
    };

    render() {
        let navLink = this.state.nav.map(item => {
            return (
                <a key={item.id}
                   className={"menu-item"}
                   href={`#${item.path}`}>
                    <div onClick={() => this.closeMenu(false)}>
                        {item.navName}
                    </div>
                </a>)
        });
        return (
            <Menu {...this.props}
                  right
                  isOpen={this.state.menuOpen}
                  onStateChange={(state) => this.handleStateChange(state)}>
                {navLink}
                <div className={`menu-item`} onClick={() => this.closeMenu(false)}><PhoneNumber/></div>
            </Menu>
        );
    }
}

export default BurgerMenu;
