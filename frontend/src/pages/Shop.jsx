import React, { useState, useEffect } from 'react';

import ProductCard from '../shared/ProductCard';
import products from '../assets/data/products';

import '../styles/shop.css';

const Shop = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

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
      </section>
    </>
  );
};

export default Shop;
