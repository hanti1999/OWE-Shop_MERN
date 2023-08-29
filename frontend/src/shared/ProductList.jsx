import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((prod, index) => (
        <div key={index} className=''>
          <ProductCard products={prod} />
        </div>
      ))}
    </>
  );
};

export default ProductList;
