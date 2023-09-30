import React, { useEffect, useRef, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Badge, Popover, Dropdown, Space, Menu } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
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
];

const items = [
  {
    label: <a href='#'>Gangz</a>,
    key: '0',
  },
  {
    label: <a href='#'>Basic is life</a>,
    key: '1',
  },
  {
    label: <a href='#'>Original</a>,
    key: '2',
  },
];

const collectionPopover = (
  <div>
    <Space direction='vertical'>
      <a href='#'>Gangz</a>
      <a href='#'>Basic is life</a>
      <a href='#'>Original</a>
    </Space>
  </div>
);

const Header = () => {
  const searchRef = useRef();
  const headerRef = useRef(null);
  const menuRef = useRef();
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

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  return (
    <header className='header w-full h-20' ref={headerRef}>
      <div className='container relative h-full'>
        <SearchBar searchRef={searchRef} searchToggle={searchToggle} />

        <div className='flex items-center justify-between h-full'>
          <Link to='/' className='logo'>
            <h1 className='md:text-6xl text-4xl'>OWE</h1>
          </Link>

          <div className='nav md:block' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-10 mb-0 pl-0'>
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

              <li className='nav__item cursor-pointer'>
                <Popover trigger='click' content={collectionPopover}>
                  <Space>
                    <a onClick={(e) => e.preventDefault()}>BỘ SƯU TẬP</a>
                    <DownOutlined className='text-sm' />
                  </Space>
                </Popover>
              </li>

              <li>
                <Space>
                  <MenuOutlined />
                  <DownOutlined className='text-sm' />
                </Space>
              </li>
            </ul>
          </div>

          <div className='menu__right flex items-center'>
            <div className='flex items-center'>
              <button onClick={searchToggle}>
                <i className='ri-search-line cursor-pointer'></i>
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
                    <div>
                      <p>{`Xin chào ${user.username}`}</p>
                      <Link className='block pt-1 pb-2 border-b' to='/wishlist'>
                        Danh sách yêu thích
                      </Link>
                      <button
                        className=' hover:text-secondary-color pt-1'
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

              <button className='mobile__menu md:hidden' onClick={toggleMenu}>
                <i className='ri-menu-line'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
