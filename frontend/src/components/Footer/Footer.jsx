import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const footerLinks = [
  {
    path: '/about',
    display: 'Về OWE',
  },
  {
    path: '/support',
    display: 'Câu hỏi thường gặp',
  },
  {
    path: '/',
    display: 'Tìm cửa hàng',
  },
  {
    path: '/',
    display: 'Chính sách đổi trả',
  },
  {
    path: '/',
    display: 'Hướng dẫn chọn size',
  },
];

const footerLinks2 = [
  {
    path: '/login',
    display: 'Đăng nhập',
  },
  {
    path: '/register',
    display: 'Đăng ký',
  },
  {
    path: '/cart',
    display: 'Giỏ hàng',
  },
  {
    path: '/wishlist',
    display: 'Mục yêu thích',
  },
];

const footerLinks3 = [
  {
    icon: 'ri-mail-line',
    display: 'Email:',
    decs: 'abc@123.com',
  },
  {
    icon: 'ri-phone-line',
    display: 'Điện thoại:',
    decs: '012345678',
  },
  {
    icon: 'ri-map-pin-line',
    display: 'Địa chỉ:',
    decs: 'Long Thành, Đồng Nai',
  },
];

const devLinks = [
  {
    href: 'https://www.facebook.com/hoangfanh.99/',
    icon: 'ri-facebook-box-line',
  },
  {
    href: 'https://www.instagram.com/hoangfanh.99/',
    icon: 'ri-instagram-line',
  },
  {
    href: 'mailto:nth.anh020209@gmail.com',
    icon: 'ri-mail-line',
  },
  {
    href: 'https://zalo.me/0986359498',
    icon: 'ri-messenger-line',
  },
];

const Footer = () => {
  return (
    <footer className=' bg-[#222] py-10'>
      <div className='container'>
        <div className='footer__link grid grid-cols-12 gap-5'>
          <div className='md:col-span-4 col-span-12'>
            <Link to='/' className='logo'>
              <h1 className='text-4xl text-white mb-2'>OWE</h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              explicabo numquam, eos ullam magni quidem minima rem at quisquam
            </p>
            <div className='flex'>
              <a href='#' target='_blank'>
                <i className='ri-facebook-box-line pr-1'></i>
              </a>
              <a href='#' target='_blank'>
                <i className='ri-instagram-line'></i>
              </a>
            </div>
          </div>
          <div className='md:col-span-3 col-span-6'>
            <h4>Thông tin</h4>
            {footerLinks.map((link, index) => (
              <div key={index}>
                <Link to={link.path}>{link.display}</Link>
              </div>
            ))}
          </div>
          <div className='md:col-span-2 col-span-6'>
            <h4>Tài khoản</h4>
            {footerLinks2.map((link, index) => (
              <div key={index}>
                <Link to={link.path}>{link.display}</Link>
              </div>
            ))}
          </div>
          <div className='md:col-span-3 col-span-12'>
            <h4>Liên hệ</h4>
            {footerLinks3.map((item, index) => (
              <div key={index} className='flex gap-1'>
                <span>
                  <i className={`${item.icon} mr-1`}></i>
                  {item.display}
                </span>
                <p>{item.decs}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='dev__links mt-10 flex items-center'>
          <p>
            Design and develop by
            <span> Nguyễn Thông Hoàng Anh</span>
            {devLinks.map((item, index) => (
              <a href={item.href} key={index} target='_blank'>
                <i className={`${item.icon} px-1`}></i>
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
