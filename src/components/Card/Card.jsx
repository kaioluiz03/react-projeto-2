import React from "react";

export const Card = (image) => 
    <div className='card'>
        <img src={image.cardImage} alt={image.imageDis} />
    </div>;