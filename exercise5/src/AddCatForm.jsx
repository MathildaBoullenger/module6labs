import { useState } from "react";

export function AddCatForm({onAddCat}) {

    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({name, latinName, image})
    }
    
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>Cat Name:
                    <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                </label>
            </div>

            <div>
                <label>Latin Name:
                    <input type="text" value={latinName} name="latinName" onChange={(e) => setLatinName(e.target.value)} />
                </label>
            </div>

            <div>
                <label>Image Url:
                    <input type="text" value={image} name="image" onChange={(e) => setImage(e.target.value)} />
                </label>
            </div>

            <button>Add Cat</button>

        </form>
    )

}





