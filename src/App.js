import React, { useState} from 'react';
import menuData from './components/menuData'
import MenuSection from './components/MenuSection';
import EntreeAndSidesSection from './components/EntreeAndSidesSection';
import HomePage from './components/HomePage';
import Logo from './assets/KokitoTitle.png'
import SectionBtn from './components/SectionBtn';
import SushiRollsSection from './components/SushiRollsSection';

import KokitoRoll from './assets/Kokito/sushi/kokito roll.jpg'
import RubiRoll from './assets/Kokito/sushi/rubi roll.jpg'
import MaresRoll from './assets/Kokito/sushi/mares roll.JPEG'
import CaterpillarRoll from './assets/Kokito/sushi/caterpillar roll.JPG'
import FijiRoll from './assets/Kokito/sushi/fiji roll.jpg'


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');  // Set the default page to 'home'
  

  const featuredRolls = [
    { 
      name: "Kokito", 
      image: KokitoRoll
    },
    { 
      name: "Rubi", 
      image: RubiRoll
    },
    { 
      name: "Mares", 
      image: MaresRoll
    },
    { 
      name: "Caterpillar", 
      image: CaterpillarRoll
    },
    { 
      name: "Fiji", 
      image: FijiRoll
    },
  ];
  return (
    <div className="w-full h-full mx-auto my-auto bg-gradient-to-r from-white to-gray-400">
      <div className='shadow-lg w-full h-[100px] flex justify-between bg-gray-400 px-2 items-end mx-auto'>
        <div>
          <img src={Logo} alt='Logo' style={{width: '250px'}} />
        </div>

        <nav className="mb-2">
          <button onClick={() => setCurrentPage('home')} className="mr-3">Home</button>
          <button onClick={() => setCurrentPage('menu')}>Menu</button>
        </nav>
      </div>

      {currentPage === 'home' ? (
        <HomePage featuredRolls={featuredRolls} />
      ) : (
        <>
          <SectionBtn/>
          <h1 className="text-4xl font-bold mb-8 px-3 py-1">Restaurant Menu</h1>
          <MenuSection title="Appetizers" items={menuData.Appetizers} />
          <MenuSection title="Salads" items={menuData.Salads} />
          <MenuSection title="Meals" items={menuData.Meals} />
          <EntreeAndSidesSection title="Entrees" items={menuData.Entrees} />
          <EntreeAndSidesSection title="Sides" items={menuData.Sides} />
          <MenuSection title="Sushi Rolls" items={menuData.SushiRolls} />
          <MenuSection title="Fried Rolls" items={menuData.FriedRoles} />
          <MenuSection title="Riceless Rolls" items={menuData.RicelessRoles} />
          {/* {Object.entries(menuData).map(([section, items], index) => (
            <MenuSection key={index} title={section} items={items} />
          ))} */}
        </>
      )}
    </div>
  );
};

export default App;
