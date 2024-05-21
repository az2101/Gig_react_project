// import johnMayer from "../assets/JohnMayer.jpeg";

const Gig = (props) => {
    return(
        <div className="gig-container">
            <h3 className="gig-band-name">{props.name}</h3>
            <img className="gig-image" src={props.image} alt={props.name}></img>
            <p data-testid="description" className="gig-description">{props.description}</p>
            <p data-testid="timedate" className="gig-time-date">{props.timedate}</p>
            <p data-testid="location" className="gig-location">{props.location}</p>
        </div>
    )
}

export default Gig;