import React from 'react';

const FeaturedRoll = ({ name, description, price, image }) => {
  return (
    <div className="border p-4">
      {image && <img src={image} alt={name} className="w-full mb-4"/>}
      <h3 className="font-bold text-lg">{name}</h3>
      <p>{description}</p>
      <p className="text-right">${price.toFixed(2)}</p>
    </div>
  );
};

export default FeaturedRoll;
