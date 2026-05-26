function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={props.url} target="_blank">
                Visit Creator
            </a>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default Card