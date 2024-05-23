import { useState } from "react";
import Gig from "./Gig";
import johnMayer from "../assets/JohnMayer.jpeg";
import beatlesImage from "../assets/Beatles.jpeg";
import queenImage from "../assets/Queen.jpeg";

const GigList = () => {
    const [gigs, setGigs] = useState([
        {
            id: 1,
            name: "John Mayer", 
            image: johnMayer, 
            description: "Join one man and his guitar for an unforgettable performance of his greatest hits.", 
            timedate: "Saturday, July 21, 2024, 8pm", 
            location:"London O2 Arena",
            isFavourited: false,
        },
        {
            id: 2,
            name: "The Beatles", 
            image: beatlesImage, 
            description: "Experience the magic of The Beatles as they take you on a journey through their timeless classics.", 
            timedate: "Saturday, August 10, 2024, 7:30pm", 
            location: "Abbey Road Studios, London, UK",
            isFavourited: false,
        },
        {
            id: 3,
            name: "Queen", 
            image: queenImage, 
            description: "Don't miss Queen's electrifying performance, featuring their greatest hits and legendary stage presence.", 
            timedate: "Friday, September 27, 2024, 9:00pm", 
            location: "Wembley Stadium, London, UK",
            isFavourited: false,
        }
    ]);

    const toggleFavourite = (id) => {
        setGigs((prevGigs) => prevGigs.map((gig) => gig.id === id ? {...gig, isFavourited: !gig.isFavourited } : gig));
    };

    const favouritedGigs = gigs.filter((gig) => gig.isFavourited);
    const nonFavouritedGigs = gigs.filter((gig) => !gig.isFavourited);

    return (
        <div>
            <h1>Favourited Gigs</h1>
            {favouritedGigs.map((gig) => (
                <Gig key={gig.id} {...gig} toggleFavourite={toggleFavourite} />
            ))}
            <h1>Other Gigs</h1>
            {nonFavouritedGigs.map((gig) => (
                <Gig key={gig.id} {...gig} toggleFavourite={toggleFavourite} />
            ))}
        </div>
    );

};

export default GigList;
