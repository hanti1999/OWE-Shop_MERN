import React, { useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Badge, Popover, Dropdown, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../../redux/slices/authSlice';
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
    label: <Link to='/'>TRANG CHỦ</Link>,
    key: '0',
  },
  {
    label: <Link to='/shop'>SẢN PHẨM</Link>,
    key: '1',
  },
  {
    label: 'BỘ SƯU TẬP',
    key: '2',
    children: [
      {
        key: '2-1',
        label: <a href='#'>Gangz</a>,
      },
      {
        key: '2-2',
        label: <a href='#'>Basic is life</a>,
      },
      {
        key: '2-3',
        label: <a href='#'>Original</a>,
      },
    ],
  },
  {
    label: 'DANH MỤC',
    key: '3',
    children: [
      {
        key: '3-1',
        label: <a href='#'>Nam</a>,
      },
      {
        key: '3-2',
        label: <a href='#'>Nữ</a>,
      },
      {
        key: '3-3',
        label: <a href='#'>Unisex</a>,
      },
    ],
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

const categoryPopover = (
  <div>
    <Space direction='vertical'>
      <a href='#'>Nam</a>
      <a href='#'>Nữ</a>
      <a href='#'>Unisex</a>
    </Space>
  </div>
);

const Header = () => {
  const searchRef = useRef();
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
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
    dispatch(authActions.logout());
    toast.success('Đăng xuất thành công!');
    navigate('/');
  };

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

          <nav className='hidden md:block'>
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
                    <i className='ri-arrow-down-s-line'></i>
                  </Space>
                </Popover>
              </li>

              <li className='nav__item cursor-pointer'>
                <Popover trigger='click' content={categoryPopover}>
                  <Space>
                    <i className='ri-menu-line'></i>
                    <i className='ri-arrow-down-s-line'></i>
                  </Space>
                </Popover>
              </li>
            </ul>
          </nav>

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

              {user.isLoggedIn ? (
                <Popover
                  content={
                    <div>
                      <p>{`Xin chào ${user.user.username}`}</p>
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
              {user.error && <p>Có lỗi xảy ra: {user.error}</p>}

              <Dropdown
                menu={{
                  items,
                }}
                trigger={['click']}
              >
                <button className='mobile__menu md:hidden'>
                  <i className='ri-menu-line'></i>
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
