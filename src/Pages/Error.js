import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='containerError'>
          <h1 className='errorPageTitle'>404</h1>
          <p className='textePageError'>Oups ! La page que vous demandez n'existe pas.</p>
          <Link to="/" className='lienHomepage'>Retourner sur la page d'accueil</Link>
    </div>
 );
}

export default Error;