import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './header.css';

const nav__links = [
  {
    path: '/',
    display: 'Trang chủ'
  },
  {
    path: '/t-shirt',
    display: 'Áo thun'
  },
  {
    path: '/about',
    display: 'Về OWE'
  },
  {
    path: '/contact',
    display: "Liên hệ"
  }

]

const Header = () => {
  return (
    <header className='header w-full h-[80px] leading-[80px]'>
      <Container>
        <Row>
          <div className="nav-wrapper flex items-center justify-between">
            {/* Logo >>>>>> */}
            <div className="logo">
              <h1>OWE</h1>
            </div>
            {/* <<<<<< End logo */}

            {/* Menu >>>>>> */}
            <div className="navigation">
              <ul className="menu flex items-center gap-[3rem] mb-0 pl-0">
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
            </div>
            {/* <<<<<< Menu end */}

            <div className="nav__right flex items-center gap-[1.5rem]">
              <div className="nav__btns flex items-center gap-[1.5rem]">
                <Button className='btn secondary__btn'>
                  <Link to='/login'>Đăng nhập</Link>
                </Button>
                <Button className='btn primary__btn'>
                  <Link to='/login'>Đăng ký</Link>
                </Button>
              </div>

              <span className='mobile__menu text-[1.3rem]'>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header