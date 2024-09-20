import React from 'react';
import { useState } from 'react';


function Collapse({ title, content }) {

    // Contenu caché par défaut, le state changera si l'utilisateur clique sur le titre de la Collapse

    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour ouvir ou fermer le contenu de la Collapse

    const onoffCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="objetsCollapse">
            <h2 className="titleCollapse" onClick={onoffCollapse}>
                {title}
            </h2>

            {/* Affichage du content sous condition que isOpen est true */}

            {isOpen && <p className="contentCollapse">{content}</p>}
        </div>
    );
}

export default Collapse;