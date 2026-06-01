import youtubeLogo from '../assets/youtube-logo.png'
import editIcon from '../assets/edit-icon.png'
import viewIcon from '../assets/info-icon.png'
import { useNavigate } from 'react-router-dom'


function Card(props) {

    const navigate = useNavigate();

    function goToEditPage() {
        navigate(`/edit/${props.id}`)
    }

    function goToViewPage() {
        navigate(`/view/${props.id}`)
    }

    function goToURL() {
        navigate(props.url)
    }

    return (
        <article class="creator-header">
            <h2>{props.name}</h2>
            <a href={props.url} target="_blank" rel="noreferrer">
                <img 
                    src={youtubeLogo}
                    alt="Visit"
                    width="25"
                />
            </a>
            <button onClick={goToEditPage}>
                <img 
                    src={editIcon}
                    alt="Edit"
                    width="15"
                />
            </button>
            <button onClick={goToViewPage}>
                <img
                    src={viewIcon}
                    alt="View"
                    width="15"
                />

            </button>
            
            <p>{props.description}</p>
            <img src={props.imageURL} alt="No Image Available" width="200" height="200"></img>
        </article>
    )
}

export default Card