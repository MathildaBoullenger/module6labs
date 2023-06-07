import { useState } from 'react';

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

    const [currentCats, setCurrentCats] = useState(cats);


    const BigCatsList = currentCats.map(cats => (
        <li key={cats.id} style={{ background: "lightblue" }} >
            {cats.name} - {cats.latinName}</li>
    ))

    const handleSortAlphabetically = () => {
        let newCats = [... currentCats];
        newCats.sort((a, b) => a.name.localeCompare(b.name));
        setCurrentCats(newCats);
    }

    const handleReverse = () => {
        let newCats = [... currentCats];
        newCats.reverse();
        setCurrentCats(newCats);
    }

    const handleFilterPanthera = () => {
        let newCats = [... currentCats];
        newCats = newCats.filter(cat => cat.latinName.includes('Panthera'));
        setCurrentCats(newCats);
    }

    const handleResetFullList = () => {
        let newCats = [... cats];
        setCurrentCats(newCats);
    }


    return (
        <>
            <div className="BigCats componentBox">
                <ul>{BigCatsList}</ul>
            </div>

            <div>
                <button onClick={handleSortAlphabetically}>Sort Alphabetically</button>
            </div>

            <div>
                <button onClick={handleReverse}>Reverse</button>
            </div>

            <div>
                <button onClick={handleFilterPanthera}>Show 'Panthera' family only</button>
            </div>

            <div>
                <button onClick={handleResetFullList}>Reset to full list</button>
            </div>

            
        </>
    )



}

export default BigCats