import { supabase } from '../client'
import { useState, useEffect } from 'react'
import Card from '../components/Card'

function ShowCreators() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        
        const fetchCreators = async () => {
            const { data, error } = await supabase
            .from('creators')
            .select()

            if(!error) {
                setCreators(data)
            }
        }

        fetchCreators();

    }, [])

    return (
        <div>
            <h1>Creatorverse</h1>
            {
                creators.length > 0 ? (
                    creators.map((creator) => (
                        <Card
                            key={creator.id}
                            name={creator.name}
                            description={creator.description}
                            url={creator.url}
                            imageURL={creator.imageURL}
                        />
                    ))
                ) : (
                    <h2>No Creators Found</h2>
                )
            }
        </div>
    )
}

export default ShowCreators