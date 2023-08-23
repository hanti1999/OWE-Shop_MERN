import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';

const nav__links = [
  {
    path: '/',
    display: 'TRANG CHỦ',
  },
  {
    path: '/shop',
    display: 'NAM',
  },
  {
    path: '/shop',
    display: 'NỮ',
  },
  {
    path: '/support',
    display: 'TRỢ GIÚP',
  },
];

const nav__links2 = [
  {
    path: '/login',
    icon: 'ri-user-3-line',
  },
  {
    path: '/wishlist',
    icon: 'ri-heart-line',
  },
  {
    path: '/cart',
    icon: 'ri-shopping-cart-2-line',
  },
];

const Header = () => {
  // Open search bar ======
  const openSearchRef = useRef();
  const searchToggle = () => {
    openSearchRef.current.classList.toggle('open-search');
  };

  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window,
      addEventListener('scroll', () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add('sticky__header');
        } else {
          headerRef.current.classList.remove('sticky__header');
        }
      });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  return (
    <header className='header w-full h-20 leading-[80px]' ref={headerRef}>
      <div className='container relative'>
        {/* Search bar ====== */}
        <form
          ref={openSearchRef}
          id='form__search'
          className='absolute left-0 right-0'
        >
          <input
            type='text'
            name='q'
            className='w-full px-2 outline-none'
            placeholder='Nhập từ khóa/mã cầm tìm'
          />
          <button type='submit'>
            <i className='ri-search-line'></i>
          </button>
          <div className='cursor-pointer' onClick={searchToggle}>
            <i className='ri-close-line'></i>
          </div>
        </form>

        <div className='flex items-center justify-between'>
          {/* Logo ====== */}
          <Link to='/' className='logo'>
            <h1 className='md:text-6xl text-4xl'>OWE</h1>
          </Link>

          {/* Menu ====== */}
          <ul className='hidden md:flex items-center gap-12 mb-0 pl-0'>
            {nav__links.map((item, index) => (
              <li className='nav__item' key={index}>
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? 'active__link' : ''
                  }
                  to={item.path}
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className='menu__right flex items-center gap-6'>
            <div className='flex items-center gap-6'>
              <button onClick={searchToggle}>
                <i className='ri-search-line cursor-pointer'></i>
              </button>
              {nav__links2.map((item, index) => (
                <button key={index}>
                  <Link to={item.path}>
                    <i className={item.icon}></i>
                  </Link>
                </button>
              ))}
            </div>
            {/* Mobile menu ====== */}
            <span className='mobile__menu md:hidden'>
              <i className='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
