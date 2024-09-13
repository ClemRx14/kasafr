import React from 'react';
import Banner from './Composants/Banner';
import Card from './Composants/Card';

import logementsData from './logements.json';

function Home() {
  return (
    <section>
      <div>
        <Banner titre="Chez vous, partout et ailleurs" className="bannierehome" />
      </div>
      <div className='containerCardLogements'>

      </div>
    </section>
  );
}

export default Home;