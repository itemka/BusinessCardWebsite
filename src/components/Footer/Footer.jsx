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
                {/*https://t.me/item_ka*/}
                <a href="tg://resolve?domain=item_ka" target="_blank"><img className={css.icon} src={telegram} alt=""/></a>
                <a href="https://www.facebook.com/profile.php?id=100004583561001" target="_blank"><img className={css.icon}
                                                                                       src={facebook} alt=""/></a>
                <a href="https://www.instagram.com/item_ka/" target="_blank"><img className={css.icon} src={instagram} alt=""/></a>
                <a href="https://www.linkedin.com/in/artem-pavlenko-001b7a191/" target="_blank"><img className={css.icon} src={linkedin}
                                                                                     alt=""/></a>
                <a href="https://vk.com/item_ka" target="_blank"><img className={css.icon} src={vk} alt=""/></a>
            </div>
            <div className={css.bottom}>© 2019 <span>All Rights Reserved</span></div>
        </footer>
    );
};

export default Footer;
