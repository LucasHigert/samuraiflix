import React from 'react';
import SamuraiFlixLogo from '../../assets/img/SamuraiFlixLogo.png';
import { Link } from 'react-router-dom';
import Button from '../Button'
import './Menu.css'


function Menu () {
    return (
        <nav className = "Menu">
            <Link to="/">
            <img className = "SamuraiFlixLogo" src = {SamuraiFlixLogo} alt = "SamuraiFlix logo"/>
            </Link>

            <Button as = {Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;