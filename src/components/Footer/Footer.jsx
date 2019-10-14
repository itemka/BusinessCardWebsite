import React from 'react';
import css from './Footer.module.css';
import facebook from '../../Files/IconSocialNetwork/facebook.svg';
import instagram from '../../Files/IconSocialNetwork/instagram.svg';
import linkedin from '../../Files/IconSocialNetwork/linkedin.svg';
import telegram from '../../Files/IconSocialNetwork/telegram.svg';
import vk from '../../Files/IconSocialNetwork/vk.svg';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.iconSN}>
                <a href=""><img className={css.icon} src={telegram} alt=""/></a>
                <a href="#"><img className={css.icon} src={facebook} alt=""/></a>
                <a href=""><img className={css.icon} src={instagram} alt=""/></a>
                <a href=""><img className={css.icon} src={linkedin} alt=""/></a>
                <a href=""><img className={css.icon} src={vk} alt=""/></a>
            </div>
            <div className={css.bottom}>© 2019 All Rights Reserved.</div>
        </footer>
    );
};

export default Footer;
