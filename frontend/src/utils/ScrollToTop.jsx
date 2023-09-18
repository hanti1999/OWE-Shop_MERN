import React, { useState, useEffect } from 'react';

import '../styles/scroll-to-top.css';

const ScrollToTop = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      handleScroll();
    };

    const handleScroll = () => {
      setShowScrollBtn(
        document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
      );
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      onClick={topFunction}
      className={`showSTTBtn ${showScrollBtn ? '' : 'opacity-0 invisible'}`}
    >
      <i className='ri-arrow-up-s-line'></i>
    </button>
  );
};

export default ScrollToTop;
