import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';

const nav__links = [
  {
    path: '/',
    display: 'TRANG CHỦ'
  },
  {
    path: '/t-shirt',
    display: 'NAM'
  },
  {
    path: '/t-shirt',
    display: 'NỮ'
  },
  {
    path: '/support',
    display: "TRỢ GIÚP"
  }

]

const Header = () => {
  const openSearchRef = useRef();
  const searchToggle = () => {
    openSearchRef.current.classList.toggle('open-search');
  }

  return (
    <header className='header w-full h-20 leading-[80px]'>
      <div className='container mx-auto xl:max-w-[1200px] relative'>
        {/* Search bar >>>>>> */}
        <form ref={openSearchRef} id='form__search' className='absolute left-0 right-0'>
          <input type="text" name='q' className='w-full px-2 outline-none' placeholder='Nhập từ khóa/mã sản phẩm cầm tìm' />
          <button type='submit'><i className="ri-search-line"></i></button>
          <div className=' cursor-pointer' onClick={searchToggle}><i className="ri-close-line"></i></div>
        </form>
        {/* <<<<<< End search bar */}
        <div className="flex items-center justify-between">
          {/* Logo >>>>>> */}
          <Link to='/' className="logo">
            <h1 className='text-6xl'>OWE</h1>
          </Link>
          {/* <<<<<< End logo */}
          
          {/* Menu >>>>>> */}
            <ul className="flex items-center gap-12 mb-0 pl-0">
              {nav__links.map((item, index) => (
                <li className='nav__item' key={index}>
                  <NavLink 
                    className={navClass => navClass.isActive ? 'active__link' : ''} 
                    to={item.path}>
                      {item.display}
                  </NavLink>
                </li>
              ))}                
            </ul>
          {/* <<<<<< Menu end */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              <button onClick={searchToggle}>
                <i className="ri-search-line"></i>
              </button>
              <button>
                <Link to='/login'><i className="ri-user-3-line"></i></Link>
              </button>
              <button>
                <Link to='/'><i className="ri-heart-line"></i></Link>
              </button>
              <button>
                <Link to='/'><i className="ri-shopping-cart-2-line"></i></Link>
              </button>
            </div>
            {/* Mobile menu >>>>>> */}
            <span className='mobile__menu text-[1.3rem]'>
              <i className="ri-menu-line"></i>
            </span>
            {/* <<<<<< End mobile menu */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header