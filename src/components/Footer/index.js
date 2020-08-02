import React from 'react';
import { FooterBase } from './styles';
import SamuraiLucas from '../../assets/img/SamuraiLucas.jpeg';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className = "SamuraiFlixLogo" src = {SamuraiLucas} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por 
        {' '}
        <a href="https://www.linkedin.com/in/lucas-higert/">
        Lucas Sembarski Higert 
        ☯
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
