import React from 'react'

function SingleCat({ name, latinName, image }) {

    return (
        <>
            <div>
                <h2>{name}</h2>
                <h3>{latinName}</h3>
                <img src={image} height="300px"></img>
            </div>
        </>
    )
}

export default SingleCat