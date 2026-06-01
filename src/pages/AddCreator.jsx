import { supabase } from '../client'
import { useNavigate } from 'react-router-dom'

function AddCreator() {
    const navigate = useNavigate();

    const submitCreator = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;
        const url = event.target.url.value;
        const imageURL = event.target.imageURL.value;

        const { error } = await supabase
        .from('creators')
        .insert({
            name: name,
            url: url,
            description: description,
            imageURL:imageURL
        })

        if(!error){
            navigate('/')
        }
    }

    return (
        <div class="container">
            <h1>Add Creator</h1>

            <form onSubmit={submitCreator}>
                <label>Name</label>
                <input type="text" name="name" required />

                <br />

                <label>URL</label>
                <input type="text" name="url" required />

                <br />

                <label>Description</label>
                <textarea name="description" required></textarea>

                <br />

                <label>Image URL (optional)</label>
                <input type="text" name="imageURL" />

                <br />

                <button type="submit">Add Creator</button>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    )
}

export default AddCreator