import { supabase } from './client'
import { useState, useEffect } from 'react'
import Card from './components/Card'

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
            {/* Creator cards will be displayed here */}
        </div>
    );
}

export default ShowCreators