import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section>
      <div className='container'>
        <div className='text-center'>
          <i className='ri-checkbox-circle-line text-3xl text-green-500'></i>
          <h1 className='font-semibold text-2xl'>Cảm ơn đã mua hàng!</h1>
          <p className='py-2'>
            Đơn hàng sẽ được vận chuyển trong thời gian sớm nhất
          </p>
          <button className='primary__btn'>
            <Link to='/'>Trở về trang chủ</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
