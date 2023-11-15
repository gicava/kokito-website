import React from 'react';
import FeaturedRoll from './FeaturedRoll';
import KokitoFront from '../assets/KokitoFront.jpg'

const HomePage = ({ featuredRolls }) => {
  return (
    <div className="w-full h-full mx-auto p-8">
      <section className='mb-8'>
        <h2 className="text-2xl font-bold mb-4">Featured Rolls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredRolls.map((roll, index) => (
            <FeaturedRoll key={index} {...roll} />
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row md: items-center mb-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold">About Our Restaurant</h2>
          <p className='mb-3'>
            It is an honor serving you since August of 2016 where delightful taste is our top priority.
            We manage fresh products of great quality. With each order, we put great effort, rich flavor, 
            and much love. 
          </p>
          <p className='mb-3'>
            Es un honor atenderlos desde Agosto del 2016 donde el deleite de su paladar es nuestra prioridad. 
            Manejamos productos frescos y de gran calidad.
            Ponemos en cada orden, esfuerzo, sazón, y mucho amor.
          </p >
          <div className="mb-3 md:mb-0">
            <h3 className="text-xl font-semibold">Operating Hours</h3>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
          </div>
        </div>
        <div className="md:w-1/2 mx-auto ">
          <img src= {KokitoFront} alt="About Our Restaurant" className="w-full h-auto object-cover mb-4 rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
