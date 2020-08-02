import React from 'react';
import SamuraiFlixLogo from '../../assets/img/SamuraiFlixLogo.png';
import './Menu.css';
// import ButtonLink from '../buttonLink/index';
import Button from '../button'
function Menu () {
    return (
        <nav className = "Menu">
            <a href = "/">
            <img className  = "SamuraiFlixLogo" src = {SamuraiFlixLogo} alt = "SamuraiFlix logo"/>
            </a>

            <Button as = "a" className = "ButtonLink" href= "/">Novo Video</Button>
        </nav>
    );
}

export default Menu;