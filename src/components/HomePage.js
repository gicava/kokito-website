import React from 'react';
import FeaturedRoll from './FeaturedRoll';
import KokitoFront from '../assets/KokitoFront.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = ({ featuredRolls }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tailwind's 'md' breakpoint
        settings: {
          slidesToShow: 1, // Show 2 slides from 'md' breakpoint and up
        },
      },
      {
        breakpoint: 1024, // Tailwind's 'lg' breakpoint
        settings: {
          slidesToShow: 3, // Show 3 slides from 'lg' breakpoint and up
        },
      },
      {
        breakpoint: 1440, // Tailwind's 'lg' breakpoint
        settings: {
          slidesToShow: 4, // Show 3 slides from 'lg' breakpoint and up
        },
      },
    ],
  };

  return (
    <div className="w-full h-full mx-auto p-8">
      <section className='mb-8'>
        <h2 className="text-2xl font-bold mb-4">Featured Rolls</h2>
        <Slider {...settings}>
          {featuredRolls.map((roll, index) => (
            <div key={index} className="relative">
              <img src={roll.image} alt={roll.name} className="object-scale-down h-48 w-96 p-3 rounded-xl" />
              <p className="absolute bottom-2 right-2 bg-black text-white p-1 text-sm rounded-sm">{roll.name}</p>
            </div>
          ))}
        </Slider>
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
            <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
            <p>Saturday - Sunday: CLOSED</p>
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
