import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import ProductList from '../components/UI/ProductList';
import ProductCard from '../shared/ProductCard';

import products from '../assets/data/products';

import '../styles/shop.css';

const Male = () => {
  return <PaginatedItems itemsPerPage={16} />;
};

function Items({ currentItems }) {
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
            {currentItems &&
              currentItems?.map((item, index) => (
                <ProductCard products={item} key={index} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <section>
        <div className='container'>
          <ReactPaginate
            breakLabel='...'
            nextLabel='Tiếp >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='< Trước'
            renderOnZeroPageCount={null}
            containerClassName='paginate__ul'
          />
        </div>
      </section>
    </>
  );
}

export default Male;
