import React from 'react';
import '../styles/common-section.css';

const CommonSection = ({ title }) => {
  return (
    <section className='common__section'>
      <div className='container'>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default CommonSection;
