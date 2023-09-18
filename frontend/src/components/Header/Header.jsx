import React, { useEffect, useRef, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Badge, Popover } from 'antd';
import { useSelector } from 'react-redux';

import { AuthContext } from '../../context/AuthContext';
import SearchBar from '../../shared/SearchBar';
import './header.css';

const nav__links = [
  {
    path: '/',
    display: 'TRANG CHỦ',
  },
  {
    path: '/shop',
    display: 'SẢN PHẨM',
  },
  {
    path: '/support',
    display: 'TRỢ GIÚP',
  },
];

const Header = () => {
  const searchRef = useRef();
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const searchToggle = () => {
    searchRef.current.classList.toggle('open-search');
  };

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
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

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    toast.success('Đăng xuất thành công!');
    navigate('/');
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  return (
    <header className='header w-full h-20 leading-[80px]' ref={headerRef}>
      <div className='container relative'>
        <SearchBar searchRef={searchRef} searchToggle={searchToggle} />

        <div className='flex items-center justify-between'>
          <Link to='/' className='logo'>
            <h1 className='md:text-6xl text-4xl'>OWE</h1>
          </Link>

          <ul className='hidden md:flex items-center gap-10 mb-0 pl-0'>
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
            <div className='flex items-center'>
              <button onClick={searchToggle}>
                <i className='ri-search-line cursor-pointer'></i>
              </button>
              <button>
                <Link to='/wishlish'>
                  <i className='ri-heart-line'></i>
                </Link>
              </button>
              <button>
                <Badge
                  style={{ backgroundColor: '#faa935' }}
                  count={totalQuantity}
                >
                  <Link to='/cart'>
                    <i className='ri-shopping-cart-2-line'></i>
                  </Link>
                </Badge>
              </button>
              {user ? (
                <Popover
                  content={
                    <div className='text-base'>
                      <p>{`Xin chào ${user.username}`}</p>
                      <button
                        className=' hover:text-secondary-color'
                        onClick={logout}
                      >
                        Đăng xuất
                      </button>
                    </div>
                  }
                  trigger='click'
                  placement='bottom'
                >
                  <i className='ri-user-follow-line px-3 cursor-pointer'></i>
                </Popover>
              ) : (
                <button>
                  <Link to='/login'>
                    <i className='ri-user-line'></i>
                  </Link>
                </button>
              )}
            </div>

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
