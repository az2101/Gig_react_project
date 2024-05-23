import { useState } from "react";
import React from 'react';
import '../Gig.css';


const Gig = ({ id, name, image, description, timedate, location, isFavourited, toggleFavourite}) => {

    return(
        <div className="gig-container">
            <h3 className="gig-band-name">{name}</h3>
            <img className="gig-image" src={image} alt={name}></img>
            <p data-testid="description" className="gig-description">{description}</p>
            <p data-testid="timedate" className="gig-time-date">{timedate}</p>
            <p data-testid="location" className="gig-location">{location}</p>
            <button className={`gig-favourite-button ${isFavourited ? "favourited" : ""}`} onClick={() => toggleFavourite(id)}>
                {isFavourited ? "Unfavourite" : "Favourite"}
            </button>
        </div>
    );
};

export default Gig;