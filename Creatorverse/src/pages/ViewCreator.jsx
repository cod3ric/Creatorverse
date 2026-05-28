import { supabase } from '../client'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function ViewCreator() {
    let params = useParams();
    const [creator, setCreator] = useState(null);

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
        <div>
            <h1>{creator.name}</h1>

            <a href={creator.url} target="_blank">
                Visit Channel
            </a>

            <p>{creator.description}</p>
            
            <img 
                src={creator.imageURL} 
                alt={creator.name} 
                width="200" 
                height="200"
            />
            
            
        </div>
    )
}

export default ViewCreator