import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className='section-title'>
      <h1>{title}</h1>
      <div className='separate mx-auto'></div>
    </div>
  );
};

export default SectionTitle;
