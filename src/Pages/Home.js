import React from 'react';
import Banner from '../Composants/Banner';
import Card from '../Composants/Card';

// Tableau d'objets où chaque objet représente un logement qui se nomme logement dans la fonction plus bas

import logementsData from '../logements.json';

function Home() {
  return (
    <section>
      <div>
        <Banner titre="Chez vous, partout et ailleurs" className="bannierehome" />
      </div>
      <div className='containerCardLogements'>
        {/* Fonction qui reprend logement  */}
      {logementsData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </section>
  );
}

export default Home;