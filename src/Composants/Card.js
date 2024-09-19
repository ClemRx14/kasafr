import React from 'react';
import { Link } from 'react-router-dom';


function Card({ logement }) {
    return (
        <div className='card'>
            <Link to={`Logement/${logement.id}`}>
            <img src={logement.cover} alt={logement.title} className='imgCard' />
            <h2 className='titleCard'>{logement.title}</h2>
            </Link>
        </div>
    );
  }

export default Card;