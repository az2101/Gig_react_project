import "./Gig.css";
import johnMayer from "./assets/JohnMayer.jpeg";
import Gig from "./components/Gig";
import beatlesImage from "./assets/Beatles.jpeg";
import queenImage from "./assets/Queen.jpeg";


function App() {
  return (
    <>
      <h1>Upcoming Performances:</h1>
      <Gig 
      name="John Mayer" 
      image={johnMayer} 
      description="Join one man and his guitar for an unforgettable performance of his greatest hits." 
      timedate="Saturday, July 21, 2024, 8pm" 
      location="London O2 Arena"/>
      <Gig 
      name="The Beatles" 
      image={beatlesImage} 
      description="Experience the magic of The Beatles as they take you on a journey through their timeless classics." 
      timedate="Saturday, August 10, 2024, 7:30pm" 
      location="Abbey Road Studios, London, UK" />
      <Gig 
      name="Queen" 
      image={queenImage} 
      description="Don't miss Queen's electrifying performance, featuring their greatest hits and legendary stage presence." 
      timedate="Friday, September 27, 2024, 9:00pm" 
      location="Wembley Stadium, London, UK" />
    </>
    
  );
}

export default App;
