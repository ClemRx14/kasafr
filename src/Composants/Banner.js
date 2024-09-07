import React from 'react';

const Banner = ({ titre, className }) => {
    return (
        <div className="bannierecontainer">
            <div className={`banniere ${className}`}></div>
            <h1 className='titrebanniere'>{titre}</h1>
        </div>
    );
};

export default Banner;