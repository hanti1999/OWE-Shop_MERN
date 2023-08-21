import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../../utils/ScrollToTop';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
