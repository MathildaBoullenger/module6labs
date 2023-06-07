import SingleCat from './SingleCat';
import cheetahImage from './assets/cheetah.jpg';
import cougarImage from './assets/cougar.jpg';
import jaguarImage from './assets/jaguar.jpg';
import leopardImage from './assets/leopard.jpg';
import lionImage from './assets/lion.jpg';
import snowleopardImage from './assets/snow-leopard.jpg';
import tigerImage from './assets/tiger.jpg';
import { useState } from 'react';

function BigCats() {
    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: cheetahImage },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: cougarImage },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: jaguarImage },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: leopardImage },
        { id: 5, name: 'Lion', latinName: 'Panthera leo', image: lionImage },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: snowleopardImage },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: tigerImage },
      ];

      const [currentCats, setCurrentCats] = useState(cats);

      const catComponents = currentCats.map(cat => (
        <SingleCat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          image={cat.image}
        />
      ));

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
    };


    return (
        <>
            <div className="BigCats componentBox">
                <ul>{catComponents}</ul>
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
                <button onClick={handleResetFullList}>Reset</button>
            </div>

            
        </>
    )



}

export default BigCats