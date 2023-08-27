import React from 'react';
import './service-card.css';

const ServiceCard = ({ item }) => {
  const { icon, title, desc } = item;
  return (
    <div className='border-r-2 border-r-secondary-color border-b-2 border-b-secondary-color rounded-br-xl h-[150px]'>
      <i className={`text-2xl md:text-3xl ${icon}`}></i>
      <h5 className=' mt-3 font-semibold uppercase md:text-lg'>{title}</h5>
      <p className=' my-3 text-sm md:text-base'>{desc}</p>
    </div>
  );
};

export default ServiceCard;
