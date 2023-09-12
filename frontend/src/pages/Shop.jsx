import React, { useState, useEffect } from 'react';

import ProductCard from '../shared/ProductCard';

import '../styles/shop.css';

import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from '../utils/config.js';

const Shop = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: products,
    loading,
    error,
  } = useFetch(`${BASE_URL}/products?page=${page}`);

  const { data: productCount } = useFetch(
    `${BASE_URL}/products/search/getProductCount`
  );

  useEffect(() => {
    const pages = Math.ceil(productCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, productCount, products]);

  return (
    <>
      <section>
        <div className='container'>
          <div className='flex gap-3 items-center'>
            <h1 className='font-semibold text-2xl'>Áo nam</h1>
            <select className='border px-2 py-3 rounded-3xl' name='' id=''>
              <option>Danh mục</option>
              <option value=''>Áo thun form rộng</option>
              <option value=''>Áo thun form tiêu chuẩn</option>
            </select>
            <select className='border px-2 py-3 rounded-3xl' name='' id=''>
              <option value=''>Mới nhất</option>
              <option value=''>Bán chạy</option>
              <option value=''>Giá từ thấp đến cao</option>
              <option value=''>Giá từ cao đến thấp</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        {loading && (
          <h4 className='animate-pulse text-2xl text-center'>Đang tải...</h4>
        )}
        {!loading && !error && (
          <div className='container'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              {products &&
                products?.map((item, index) => (
                  <ProductCard products={item} key={index} />
                ))}
            </div>

            <div className='pagination'>
              {[...Array(pageCount).keys()].map((number) => (
                <span
                  className={page === number ? 'active__page' : ''}
                  key={number}
                  onClick={() => setPage(number)}
                >
                  {number + 1}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Shop;
