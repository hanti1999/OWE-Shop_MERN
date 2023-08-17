import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
  const { id, title, gender, price, salePrice, productImg } = products;
  return (
    <div className='shadow-md rounded hover:shadow-2xl transition-all overflow-hidden'>
      <Link to={`/shop/${id}`} className='aspect-square block'>
        <img src={productImg} className='object-cover h-full w-full' alt='' />
      </Link>
      <div className='product__info p-1'>
        <div className='flex justify-between'>
          <span className='text-gray-500'>{gender}</span>
          <span className='cursor-pointer'>
            <i className='ri-heart-add-line text-2xl'></i>
          </span>
        </div>
        <Link to={`/shop/${id}`}>
          <h4 className='font-semibold pb-4'>{title}</h4>
        </Link>
        <span className='line-through pr-2'>{price.toLocaleString()}</span>
        <span className='font-bold text-xl'>
          {salePrice.toLocaleString()} VND
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
