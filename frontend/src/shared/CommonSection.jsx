import React from 'react';
import '../styles/common-section.css';

const CommonSection = ({ title }) => {
  return (
    <section className='common__section'>
      <div className='container text-center'>
        <h2 className='text-white font-bold text-4xl'>{title}</h2>
      </div>
    </section>
  );
};

export default CommonSection;
