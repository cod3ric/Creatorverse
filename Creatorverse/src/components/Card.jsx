import youtubeLogo from '../assets/youtube-logo.png'

function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <a href={props.url} target="_blank">
                Visit Channel
            </a>
            <p>{props.description}</p>
            <img src={props.imageURL} alt={props.name} width="200" height="200"></img>
        </div>
    )
}

export default Card