import React from 'react';

const MenuItem = ({ name, description, price, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {image && <img src={image} alt={name} className="w-full h-80 object-cover mb-4 rounded-lg"/>}
      <h3 className="font-bold text-2xl">{name}</h3>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-right font-medium">${price.toFixed(2)}</p>
    </div>
  );
};

export default MenuItem;
