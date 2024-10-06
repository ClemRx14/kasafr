import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../Composants/Slideshow';
import Collapse from '../Composants/Collapse';


import logementsData from '../logements.json';


function Logement() {

  // Recupération de l'id par l'url et vérification de celui-ci dans la base de données

  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  return (
    <div className='logement'>
      <section className='containerImageSlide'>
        <Slideshow images={logement.pictures} />
      </section>

      <section className='infosLogement'>
        <div className='infosGauche'>
          <h1 className='titreLogement'>{logement.title}</h1>
          <h2 className='localisationLogement'>{logement.location}</h2>
          <div className='filtresLogement'>
          {logement.tags.map((tag, index) => (
              <span key={index} className="différentFiltres">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='infosDroite'>
          <div className='hostLogement'>
            <img className='hostPhoto' src={logement.host.picture} alt={logement.host.name}></img>
            <p className='hostName'>{logement.host.name}</p>
          </div>
          <div className='logementRating'>
            <img src='/images/ratinginac.svg'></img>
            <img src='/images/ratinginac.svg'></img>
            <img src='/images/ratinginac.svg'></img>
            <img src='/images/ratinginac.svg'></img>
            <img src='/images/ratinginac.svg'></img>
          </div>

        </div>
      </section>
      <section className='collapseLogement'>
        <Collapse  title="Description" content={logement.description} />
        <Collapse  title="Equipements" content={logement.equipments} />

      </section>
    </div>
  );
}

export default Logement;