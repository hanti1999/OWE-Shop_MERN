import React from 'react';
import './service-card.css';

const ServiceCard = ({ item }) => {
  const { icon, title, desc } = item;
  return (
    <div className='service__item'>
      <i className={`text-2xl md:text-3xl ${icon}`}></i>
      <h5 className=' my-1 md:mt-2 font-semibold uppercase'>{title}</h5>
      <p className='text-sm md:text-base'>{desc}</p>
    </div>
  );
};

export default ServiceCard;
