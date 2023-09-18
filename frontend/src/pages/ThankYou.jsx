import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

const ThankYou = () => {
  return (
    <Result
      status='success'
      title='Đặt hàng thành công!'
      subTitle='Đơn hàng sẽ được xử lý và giao đến bạn trong thời gian sớm nhất!'
      extra={[
        <button key='home' className=' primary__btn'>
          <Link to='/'>Trở về trang chủ</Link>
        </button>,
        <button key='shop' className=' secondary__btn'>
          <Link to='/shop'>Tiếp tục mua sắm</Link>
        </button>,
      ]}
    />
  );
};

export default ThankYou;
