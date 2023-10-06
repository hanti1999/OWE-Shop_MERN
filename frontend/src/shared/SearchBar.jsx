import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';

const SearchBar = ({ searchRef, searchToggle }) => {
  const navigate = useNavigate();
  const inputRef = useRef('');

  const searchHandler = async (e) => {
    e.preventDefault();
    const inputTitle = inputRef.current.value;

    const res = await fetch(
      `${BASE_URL}/products/search/getProductBySearch?title=${inputTitle}`
    );

    if (!res.ok) alert('Không thể fetch!');

    const result = await res.json();

    navigate(`shop/products/search?title=${inputTitle}`, {
      state: result.data,
    });
  };

  return (
    <form
      ref={searchRef}
      id='form__search'
      className='absolute left-0 right-0 leading-[80px]'
      onSubmit={searchHandler}
    >
      <input
        type='text'
        className='w-full px-2 outline-none'
        placeholder='Nhập từ khóa/mã cầm tìm'
        ref={inputRef}
      />
      <button type='submit' className=' cursor-pointer' onClick={searchHandler}>
        <i className='ri-search-line'></i>
      </button>
      <div className='cursor-pointer' onClick={searchToggle}>
        <i className='ri-close-line'></i>
      </div>
    </form>
  );
};

export default SearchBar;
