import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import ServiceList from '../services/ServiceList';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const { productImg, title, price, salePrice, desc, gender, size, details } =
    product;

  return (
    <>
      <section>
        <div className='container'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='product__img'>
              <img src={productImg} alt='' />
            </div>
            <div className='product__info'>
              <h2 className=' font-semibold text-3xl'>{title}</h2>

              <div className='flex flex-col mt-3'>
                <p className=' md:pr-2 '>
                  Giá gốc:{' '}
                  <span className='line-through text-gray-400'>
                    {price.toLocaleString()}
                  </span>
                </p>
                <p className=' font-semibold text-lg md:text-xl'>
                  Giá Sale:{' '}
                  <span className='text-red-500 pr-2'>
                    {salePrice.toLocaleString()} đ
                  </span>
                  (tiết kiệm: {(price - salePrice).toLocaleString()} đ)
                </p>
              </div>

              <div className=' mt-3 flex justify-between'>
                <div>
                  Kích thước áo:
                  <select className='border rounded-lg px-1 ml-1' name='' id=''>
                    {size.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <a className=' text-blue-500 underline' href='#'>
                  Hướng dẫn chọn size
                </a>
              </div>

              <div className='mt-6'>
                <button className='bg-black text-white px-6 py-2 rounded-3xl'>
                  <i className='ri-shopping-bag-3-line pr-1'></i>
                  Thêm vào giỏ hàng
                </button>
              </div>

              <div className='grid grid-cols-2 gap-2 mt-6 pt-1 border-t-2'>
                <ServiceList />
              </div>

              <div className='mt-6 pt-1 border-t-2'>
                <h5 className=' font-semibold mb-2'>Đặc điểm nổi bật:</h5>
                <ul className='list-disc pl-6'>
                  {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
