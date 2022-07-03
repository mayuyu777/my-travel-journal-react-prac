

export default function Destination (props) {

    const loc = props.location.toUpperCase();
    return (
        <div className="des-cont" key={props.id}>
            <img className="des-photo" src={props.imageUrl} alt={props.title}/>
            <div className="des-det-cont">
                <div className="dest-det-name">
                    <img className='des-det-pin' src={require('../images/location-pin.png')} alt="pin"/> 
                    <span className='des-det-loc'>{loc}</span>
                    <span><a className='des-det-map' href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></span>
                </div>
                <h1>{props.title}</h1>
                <h5>{`${props.startDate} - ${props.endDate}`}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}