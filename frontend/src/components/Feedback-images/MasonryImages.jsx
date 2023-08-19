import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import feedbakImages from './feedbackImages';

const MasonryImages = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 1024: 4 }}>
      <Masonry gutter='1rem'>
        {feedbakImages.map((item, index) => (
          <img
            className='masonry__img'
            src={item}
            key={index}
            alt=''
            style={{ width: '100%', display: 'block', borderRadius: '4px' }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImages;
