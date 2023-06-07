import React from 'react'
import cheetahImage from './assets/cheetah.jpg';
import cougarImage from './assets/cougar.jpg';
import jaguarImage from './assets/jaguar.jpg';
import leopardImage from './assets/leopard.jpg';
import lionImage from './assets/lion.jpg';
import snowleopardImage from './assets/snow-leopard.jpg';
import tigerImage from './assets/tiger.jpg'


function CatList() {

    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: cheetahImage },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: cougarImage },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: jaguarImage },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: leopardImage },
        { id: 5, name: 'Lion', latinName: 'Panthera leo', image: lionImage },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: snowleopardImage },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: tigerImage },
    ];


    return (
        <div>
            {cats.map(cat => (
                <Cat
                    key={cat.id}
                    name={cat.name}
                    latinName={cat.latinName}
                    image={cat.image}
                />
            ))}
        </div>
    );
}


function Cat({ name, latinName, image }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{latinName}</h3>
            <img src={image} alt={name} height="300px"></img>
        </div>
    )
}


export default CatList