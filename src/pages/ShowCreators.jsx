import { supabase } from '../client'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

function ShowCreators() {

    const navigate = useNavigate();

    function goToAddCreator() {
        navigate('/add')
    }

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        
        const fetchCreators = async () => {
            const { data, error } = await supabase
            .from('creators')
            .select()
            .order('id', { ascending: true })

            if(!error) {
                setCreators(data)
            }
        }

        fetchCreators();

    }, [])

    return (
        <body>
            <header>
                <h1>Creatorverse</h1>

                <button onClick={goToAddCreator}>
                    Add Creator
                </button>
            </header>
            <main>
                {
                    creators.length > 0 ? (
                        creators.map((creator) => (
                            <Card
                                key={creator.id}
                                id={creator.id}
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
            </main>
        </body>
    )
}

export default ShowCreators