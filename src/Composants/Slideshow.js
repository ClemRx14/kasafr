import React from 'react';
import { useState } from 'react';



function Slideshow ({ images }) {

    const [indexActuel, changementIndex] = useState(0);

    // Changement d'images 

    // Si on est sur la première image alors on revient à la dernière, sinon  on décrémente.

    const imagePrecedente = () => {
        if (indexActuel === 0) {
            changementIndex(images.length - 1);
        } else {
            changementIndex(indexActuel - 1);
        }
    };

    // Si on est à la dernière image alors on revient à la première, sinon on incrémente.

    const imageSuivante = () => {
        if (indexActuel === images.length - 1) {
            changementIndex(0);
        } else {
            changementIndex(indexActuel + 1);
        }
    };
    return (
        <div className='slideImage'>
            <img src={images[indexActuel]} alt={`Slide ${indexActuel + 1}`} className="image" />
            
            {images.length > 1 && (
                <div className='navimage'>
                    <button onClick={imagePrecedente} className='flechedegauche'>
                        <img src='/images/flechegauche.svg' alt="Image Précédente" />
                    </button>
                    <button onClick={imageSuivante} className='flechededroite'>
                        <img src='/images/flechedroite.svg' alt="Image Suivante" />
                    </button>
                </div>
            )}
            {images.length > 1 && (
                <p className='compteurimage'>{`${indexActuel + 1} / ${images.length}`}</p>
            )}
        </div>
    );
}


export default Slideshow;