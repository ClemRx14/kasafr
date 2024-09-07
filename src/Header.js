import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <nav className='navheader'>
            <img src="/images/LOGO.svg" alt="Logo de Kasa" className='logoheader'/>
            <ul className='listeheader'>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A Propos</Link></li>
            </ul>
        </nav>

    </header>
  );
}

export default Header;