import React from 'react';

const SushiRollsItem = ({ name, description, image }) => (
    <div className="border rounded-lg p-4 shadow-md">
      {image && <img src={image} alt={name} className="w-full h-80 object-cover mb-4 rounded-lg"/>}
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm mb-2">{description}</p>
    </div>
);

const SushiRollsSection = ({ title, items = [] }) => {
    return (
      <div name={title} className="my-8 px-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {items.map((item, index) => (
              <SushiRollsItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SushiRollsSection;