import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <div class="header__container">
            <Link to="/"><img className='header__logo' src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/187259676/original/61b22b4bd5990ab53e1ecaaaa2676b95d9d6e7ad/design-an-awesome-gaming-logo-for-you-in-24-h.jpg' alt='logo'></img></Link>
            <div>
                <h1 className='header__title'>GAME HUB</h1>
                <h4 className='header__subtitle'>For gamers, by gamers.</h4>
            </div>
        </div>
    );
}

export default Header;