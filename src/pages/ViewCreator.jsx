import { supabase } from '../client'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import youtubeLogo from '../assets/youtube-logo.png'
import { useNavigate } from 'react-router-dom'


function ViewCreator() {
    let params = useParams();
    const [creator, setCreator] = useState(null);
    const navigate = useNavigate();

    function goToEditPage() {
        navigate(`/edit/${params.id}`)
    }

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
            .from('creators')
            .select()

            if(!error) {
                const filteredData = 
                    data.filter((creator) => creator.id == params.id)
                
                setCreator(filteredData[0])
            }
        }

        fetchCreator();

    }, [])

    if(!creator){
        return <h2>Loading...</h2>
    }

    return (
        <div class="container">
            <h1>{creator.name}</h1>

            <a href={creator.url} target="_blank" rel="noreferrer">
                <img 
                    src={youtubeLogo}
                    alt="Visit Channel"
                    width="25"
                />
            </a>

            <p>{creator.description}</p>
            <br/>
            
            <img 
                src={creator.imageURL} 
                alt={creator.name} 
                width="200" 
                height="200"
            />
            <br/>
            <br/>
            
            <button onClick={goToEditPage}>
                Edit Creator
            </button>
            
        </div>
    )
}

export default ViewCreator