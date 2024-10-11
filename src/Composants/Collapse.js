import React from 'react';
import { useState } from 'react';


function Collapse({ title, content, className }) {

    // Contenu caché par défaut, le state changera si l'utilisateur clique sur le titre de la Collapse

    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour ouvir ou fermer le contenu de la Collapse

    const onoffCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`objetsCollapse ${className}`}>
            <h2 className="titleCollapse" onClick={onoffCollapse}>
                {title}
                
                {/* Ajout de la classe rotate si isOpen est true */}
                <span className={`iconeCollapse ${isOpen ? 'rotate' : ''}`}>
                    ^
                </span>
            </h2>

            {/* Affichage du content sous condition que isOpen est true */}
            {isOpen && ( 
                <p className={`contentCollapse ${isOpen ? 'collapseOuverte' : ''}`}>
                    {content}
                </p>
            )}
        </div>
    );
}

export default Collapse;