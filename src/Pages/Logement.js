import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../Composants/Slideshow';

import logementsData from '../logements.json';


function Logement() {

  // Recupération de l'id par l'url et vérification de celui-ci dans la base de données
  
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  return (
    <div className='containerImageSlide'>
      <Slideshow images={logement.pictures} />
    </div>
  );
}

export default Logement;