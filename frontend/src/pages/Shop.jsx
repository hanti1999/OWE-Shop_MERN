import React, { useEffect, useState } from 'react';
import { Pagination, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import ProductCard from '../shared/ProductCard';
import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from '../utils/config.js';

const categoryOptions = [
  {
    value: '',
    label: 'Danh mục',
  },
  {
    value: 'nam',
    label: 'Áo nam',
  },
  {
    value: 'nu',
    label: 'Áo nữ',
  },
  {
    value: 'unisex',
    label: 'Áo unisex',
  },
];

const sortOptions = [
  {
    value: 'newest',
    label: 'Mới nhất',
  },
  {
    value: 'asc',
    label: 'Giá từ thấp đến cao',
  },
  {
    value: 'des',
    label: 'Giá từ cao đến thấp',
  },
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);

  const {
    data: products,
    loading,
    error,
  } = useFetch(`${BASE_URL}/products?page=${currentPage - 1}`);

  const { data: productCount } = useFetch(
    `${BASE_URL}/products/search/getProductCount`
  );

  const onPageChange = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const onCategoryChange = (e) => {
    if (e === 'nam') {
      const filteredProducts = products.filter((i) => i.gender === 'nam');
      setCurrentProducts(filteredProducts);
    } else if (e === 'nu') {
      const filteredProducts = products.filter((i) => i.gender === 'nu');
      setCurrentProducts(filteredProducts);
    } else if (e === 'unisex') {
      const filteredProducts = products.filter((i) => i.gender === 'unisex');
      setCurrentProducts(filteredProducts);
    } else {
      setCurrentProducts(products);
    }
  };

  const onSortChange = (e) => {
    if (e === 'asc') {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setCurrentProducts(sortedProducts);
    } else if (e === 'des') {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setCurrentProducts(sortedProducts);
    } else {
      setCurrentProducts(products);
    }
  };

  useEffect(() => {
    setCurrentProducts(products);
  }, [products]);

  return (
    <>
      <section>
        <div className='container'>
          <div className='flex gap-3 items-center'>
            <h1 className='font-semibold text-2xl'>Sản phẩm</h1>
            <div className=' md:flex gap-3'>
              <Select
                defaultValue=''
                className=' w-full md:w-[300px]'
                onChange={onCategoryChange}
                options={categoryOptions}
              />
              <Select
                defaultValue='newest'
                className=' w-full md:w-[300px]'
                onChange={onSortChange}
                options={sortOptions}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        {loading && (
          <h4 className='animate-pulse text-2xl text-center'>
            <LoadingOutlined /> Đang tải...
          </h4>
        )}
        {!loading && !error && (
          <div className='container'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              {currentProducts &&
                currentProducts?.map((item, index) => (
                  <ProductCard products={item} key={index} />
                ))}
            </div>

            <div className='pagination mt-4'>
              <Pagination
                current={currentPage}
                pageSize={8}
                total={productCount}
                onChange={onPageChange}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Shop;
