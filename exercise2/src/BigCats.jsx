import React from 'react'

function BigCats() {

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];

const BigCatsList = cats.map(cats => (
    <li key = {cats.id} style = {{ background: "lightblue"}} >
        {cats.name} - {cats.latinName}</li>
    ))

    return (
        <div className="BigCats componentBox">
            <ul>{BigCatsList}</ul>
        </div>
    )

}

export default BigCats