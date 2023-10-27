import React, {useState, useEffect} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'



const SectionBtn =() => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70; // adjust this value as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <div className={`fixed ${scrolled ? 'top-3' : 'top-[15%]'} right-3 bg-slate-500 rounded-full shadow-lg p-3 transition-all ease-in-out duration-100`}>
      <div onClick={handleClick} className={`${!nav ? '' : 'fixed mb-3 z-10 flex flex-col top-[15%] right-7' } cursor-pointer `}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
        <ul className={!nav ? 'hidden' : 'fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='Appetizers' smooth={true} duration={500}>
              Appetizers
            </Link></li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='Salads' smooth={true} duration={500}>
              Salads
            </Link></li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='Meals' smooth={true} duration={500}>
              Meals
            </Link>
          </li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='Entrees' smooth={true} duration={500}>
              Entrees
            </Link></li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='Sides' smooth={true} duration={500}>
              Sides
            </Link></li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='SushiRolls' smooth={true} duration={500}>
              SushiRolls
            </Link></li>
        </ul>
    </div>
  );
};

export default SectionBtn;
