import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ServiceList from '../services/ServiceList';
import ProductList from '../shared/ProductList';

import { cartActions } from '../redux/slices/cartSlice';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

import '../styles/product-details.css';

const ProductDetails = () => {
  const [enterSize, setEnterSize] = useState('');
  const { id } = useParams();
  const sliceId = id.slice(-24, id.length);
  const dispatch = useDispatch();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`${BASE_URL}/products/${sliceId}`);

  const { data: products } = useFetch(`${BASE_URL}/products`);

  const { productImg, title, price, sale, gender, size, details } = product;
  const salePrice = Number(price) * Number(sale);

  const relatedProducts = products
    .slice(0, 4)
    .filter((product) => product.gender === gender);

  const addToCart = () => {
    if (enterSize === '') {
      alert('Bạn chưa chọn size!');
    } else {
      dispatch(
        cartActions.addItem({
          id: id.slice(-2, id.length),
          title: title,
          size: enterSize,
          price: salePrice,
          productImg: productImg,
        })
      );
      console.log('test: theem sp thanh cong!');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      {loading && (
        <h4 className='animate-pulse text-2xl text-center'>Đang tải...</h4>
      )}
      {!loading && !error && (
        <>
          <section>
            <div className='container'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                <div className='product__img'>
                  <img src={productImg} alt='' />
                </div>

                <div className='product__info mt-3 md:mt-0'>
                  <h2 className='font-semibold text-2xl md:text-3xl'>
                    {title}
                  </h2>
                  <span className='uppercase text-sm md:text-base'>
                    {gender}
                  </span>

                  <div className='flex flex-col mt-3'>
                    <p className=' md:pr-2 '>
                      Giá gốc:{' '}
                      <span className='line-through text-gray-400'>
                        {price.toLocaleString()}
                      </span>
                    </p>
                    <p className=' font-semibold text-base md:text-xl'>
                      Giá Sale:{' '}
                      <span className='text-red-500 pr-2'>
                        {salePrice.toLocaleString()} đ
                      </span>
                    </p>
                  </div>

                  <div className=' mt-3 flex max-md:flex-col justify-between'>
                    <div>
                      Kích thước áo:
                      <select
                        className='border rounded-lg px-1 ml-1'
                        onChange={(e) => setEnterSize(e.target.value)}
                        value={enterSize}
                      >
                        <option>Chọn size</option>
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
                    <button
                      className='bg-black text-white px-6 py-2 rounded-3xl'
                      onClick={addToCart}
                    >
                      <i className='ri-shopping-bag-3-line pr-1'></i>
                      Thêm vào giỏ hàng
                    </button>
                  </div>

                  <div className='mt-6 pt-1 border-t-2'>
                    <h5 className='font-semibold mb-2'>Đặc điểm nổi bật:</h5>
                    <ul className='list-disc pl-6'>
                      {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className='grid grid-cols-2 gap-1 md:gap-2 mt-6 pt-1 border-t-2'>
                    <ServiceList />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='container'>
              <div className='product__gallery grid grid-cols-1 md:grid-cols-2 md:gap-1'>
                <img src={productImg} alt='' />
                <img src={productImg} alt='' />
                <img src={productImg} alt='' />
                <img src={productImg} alt='' />
              </div>
            </div>
          </section>

          <section>
            <div className='container'>
              <h3 className='font-bold text-lg md:text-2xl uppercase mb-4'>
                Sản phẩm bạn có thể thích
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                <ProductList data={relatedProducts} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
