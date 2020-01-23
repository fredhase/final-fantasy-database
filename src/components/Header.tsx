import React from 'react';

import '../style/css/Header.css'
import FinalFantasyLogo from '../style/images/final-fantasy-logo.png';

function Header() {
    return(
        <div>
            <img id="main-logo" src={ FinalFantasyLogo } alt="Final Fantasy main logo"/>
            <div> Search Bar upcoming </div>
        </div>
    );
}

export default Header;