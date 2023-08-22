import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=' bg-[#222] py-10'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-5 footer__link'>
          <div className='md:col-span-8 col-span-12'>
            <Link to='/' className='logo'>
              <h1 className='text-4xl text-white mb-2'>OWE</h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              explicabo numquam, eos ullam magni quidem minima rem at quisquam
              cum alias, esse, necessitatibus inventore aut saepe blanditiis id
              non fugiat?
            </p>
            <div className='flex'>
              <a href='#' target='_blank'>
                <i className='ri-facebook-fill pr-1'></i>
              </a>
              <a href='#' target='_blank'>
                <i className='ri-instagram-line'></i>
              </a>
            </div>
          </div>
          <div className='md:col-span-2 col-span-6'>
            <h4>Thông tin</h4>
            <Link to='/'>Về OWE</Link>
            <Link to='/'>Dịch vụ</Link>
            <Link to='/'>Địa chỉ</Link>
            <Link to='/'>Đổi trả</Link>
          </div>
          <div className='md:col-span-2 col-span-6'>
            <h4>Danh mục</h4>
            <Link to='/'>Nam</Link>
            <Link to='/'>Nữ</Link>
          </div>
        </div>
        <div className='mt-10'>
          <div className='flex items-center'>
            <p>
              Design by
              <span> Nguyễn Thông Hoàng Anh</span>
              <a href='https://www.facebook.com/hoangfanh.99/' target='_blank'>
                <i className='ri-facebook-fill pl-1'></i>
              </a>
              <a href='https://www.instagram.com/hoangfanh.99/' target='_blank'>
                <i className='ri-instagram-line px-1'></i>
              </a>
              | Powered by <span> React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
