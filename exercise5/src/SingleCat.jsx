import React from 'react'


function SingleCat({ name, latinName, image, onDelete }) {
    const handleRemoveCat = () => {
        onDelete();
      };

    return (
        <>
            <div>
                <h2>{name}</h2>
                <h3>{latinName}</h3>
                <img src={image} height="300px"></img>
            </div>


            < div >
                <button onClick={handleRemoveCat}>
                    Delete
                </button>
            </div >
        </>
    )
}


export default SingleCat