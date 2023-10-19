import React from 'react';
import FeaturedRoll from './FeaturedRoll';

const HomePage = ({ featuredRolls }) => {
  return (
    <div className="container mx-auto p-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold">About Our Restaurant</h2>
        <p>
          Welcome to our restaurant! We offer the finest sushi rolls and dishes from around the world.
          Come and experience dining like never before.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Rolls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredRolls.map((roll, index) => (
            <FeaturedRoll key={index} {...roll} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
