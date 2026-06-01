import { supabase } from '../client'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditCreator() {
    let params = useParams()
    const navigate = useNavigate();
    const [creator, setCreator] = useState(null);

    useEffect(()=> {
        const fetchCreator = async () => {
            const {data, error} = await supabase
            .from('creators')
            .select()

            if(!error) {
                const filteredData = data.filter(
                    (creator) => creator.id == params.id
                )

                setCreator(filteredData[0])
            }
        }

        fetchCreator()
    }, [])

    const updateCreator = async (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const url = event.target.url.value
        const description = event.target.description.value
        const imageURL = event.target.imageURL.value

        const { error } = await supabase
        .from('creators')
        .update({
            name:name,
            url:url,
            description: description,
            imageURL: imageURL
        })
        .eq('id', params.id)

        if(!error) {
            navigate('/')
        }
    }

    const deleteCreator = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this creator?"
        )

        if (!confirmDelete) {
            return
        }

        const {error} = await supabase
        .from('creators')
        .delete()
        .eq('id', params.id)

        if(!error) {
            navigate('/')
        }
    }

    if(!creator) {
        return <h2>Loading...</h2>
    }

    return (
        <div class="container">
            <h1>Edit Creator</h1>

            <form onSubmit={updateCreator}>
`               <label>Name</label>
                <input type="text" name="name" defaultValue={creator.name}/>
                <br />

                <label>URL</label>
                <input type="text" name="url" defaultValue={creator.url}/>
                <br />

                <label>Description</label>
                <textarea name="description" defaultValue={creator.description}></textarea>
                <br />

                <label>Image URL (optional)</label>
                <input type="text" name="imageURL" defaultValue={creator.imageURL}/>
                <br />

                <button type="submit">Update Creator</button>
                <button type="button" onClick={deleteCreator}>
                    Delete Creator
                </button>
            </form>
        </div>
    )
}

export default EditCreator