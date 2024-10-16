import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


function Collapse({ title, content, className }) {

    // Contenu caché par défaut, le state changera si l'utilisateur clique sur le titre de la Collapse

    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour ouvir ou fermer le contenu de la Collapse

    const onoffCollapse = () => {
        setIsOpen(!isOpen);
    }

    // Referencer le div avec le content

    const contentRef = useRef(null);

    // MaxHeight de base à 0 pour le content 

    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);
    

    return (
        <div className={`objetsCollapse ${className}`}>
            <button
                type="button"
                className="titleCollapse" 
                onClick={onoffCollapse}
            >
                {title}
                {/* Ajout de la classe rotate si isOpen est true */}
                <span className={`iconeCollapse ${isOpen ? 'rotate' : ''}`}>
                    ^
                </span>
            </button>
            <div 
                ref={contentRef} 
                className="contentCollapse" 
                style={{ maxHeight: maxHeight, transition: 'max-height 0.3s ease' }}
            >
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Collapse;