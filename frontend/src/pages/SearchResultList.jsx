import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import ProductCard from '../shared/ProductCard';

const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          {data.length === 0 ? (
            <h4 className='col-span-2 md:col-span-4 text-center text-xl font-semibold'>
              Không tìm thấy sản phẩm!
            </h4>
          ) : (
            data?.map((product, index) => (
              <ProductCard products={product} key={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResultList;
