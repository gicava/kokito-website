import React, { useState } from 'react';
import MenuSection from './components/MenuSection';
import HomePage from './components/HomePage';
import Logo from './assets/KokitoTitle.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

// Imports for pictures
import CrabPuffs from './assets/Crabpuffs.png'
import EggRoll from './assets/sushi-pics/eggrolls.jpg'
import SourSoup from './assets/chinesefood/hot and sour soup.jpg'
import PankoShrimp from './assets/chinesefood/panko shrimp.png'
//

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');  // Set the default page to 'home'
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const menuData = {
    Appetizers: [
      { 
        name: "Crab Puffs", 
        description: "Crab, cream cheese", 
        price: 1,
        image: CrabPuffs
      },
      { 
        name: "Egg Roll", 
        description: "Classic Egg Roll", 
        price: 1,
        image: EggRoll
      },
      { 
        name: "Hot & Sour Soup", 
        description: "Spicy and sour soup containing mushrooms sour things and other spicy spices", 
        price: 1,
        image: SourSoup
      },
      { 
        name: "Panko Shrimp", 
        description: "Deep fried breaded shrimp", 
        price: 1,
        image: PankoShrimp
      },
      //... more appetizers
    ],
    Salads: [
      //... salads data
    ],
    Meals: [
      //... meals data
    ],
    Entrees: [
      //... entrees data
    ],
    Sides: [
      //... sides data
    ],
    SushiRoles: [
      //... sushi roles data
    ],
  };

  const featuredRolls = [
    { name: "Dragon Roll", description: "Eel and cucumber inside with thinly sliced avocado on top.", price: 13.50, image: "image import name" },
    // ... more featured rolls
  ];
  return (
    <div className="w-full h-full mx-auto my-auto bg-gradient-to-r from-white to-gray-400">
      <div className='shadow-lg w-full h-[100px] flex justify-between bg-gray-400 px-3 items-end mx-auto'>
        <div>
          <img src={Logo} alt='Logo' style={{width: '300px'}} />
        </div>

        <nav className="mb-2">
          <button onClick={() => setCurrentPage('home')} className="mr-4">Home</button>
          <button onClick={() => setCurrentPage('menu')}>Menu</button>
        </nav>
        
        <div onClick={handleClick} className='fixed mb-3 z-10 flex flex-col top-[15%] right-3'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul className={!nav ? 'hidden' : 'fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='Appetizers' smooth={true} duration={500}>
              Appetizers
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='Salads' smooth={true} duration={500}>
              Salads
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='Meals' smooth={true} duration={500}>
              Meals
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='Entrees' smooth={true} duration={500}>
              Entrees
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='Sides' smooth={true} duration={500}>
              Sides
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='SushiRoles' smooth={true} duration={500}>
              SushiRoles
            </Link></li>
        </ul>
      </div>

      {currentPage === 'home' ? (
        <HomePage featuredRolls={featuredRolls} />
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-8 px-3 py-1">Restaurant Menu</h1>
          {Object.entries(menuData).map(([section, items], index) => (
            <MenuSection key={index} title={section} items={items} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
