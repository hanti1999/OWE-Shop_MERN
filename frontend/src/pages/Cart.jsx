import React, { useState } from 'react';
import '../styles/cart.css';

import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const servicePee = 25000;
  const totalWithSP = Number(totalAmount) + Number(servicePee);

  return (
    <section>
      <div className='container'>
        {cartItems.length === 0 ? (
          <div className='text-xl text-center font-medium'>
            Chưa có sản phẩm trong giỏ hàng!
          </div>
        ) : (
          <div className='cart__wrapper grid grid-cols-1 md:grid-cols-2 md:gap-3'>
            <div>
              <h2 className='text-2xl font-semibold pb-1'>CHI TIẾT ĐƠN HÀNG</h2>
              <table className='table w-full'>
                <tbody>
                  {cartItems.map((item, index) => (
                    <Tr item={item} key={index} />
                  ))}
                  <tr>
                    <td colSpan={2}>
                      <p>
                        Phí Giao hàng: {servicePee.toLocaleString()}đ (Miễn phí
                        với đơn hàng từ 500k)
                      </p>
                      <p>
                        Tổng:{' '}
                        <span className='text-red-500 text-lg'>
                          {totalAmount <= 500000
                            ? totalWithSP.toLocaleString()
                            : totalAmount.toLocaleString()}
                          đ
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='max-md:border-t max-md:pt-2'>
              <h2 className='text-2xl font-semibold pb-1'>
                THÔNG TIN MUA HÀNG
              </h2>
              <Form />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const handleProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img className=' w-28' src={item.productImg} alt='' />
      </td>
      <td>
        <p>{item.title}</p>
        <p>
          size: <span>{item.size}</span>
        </p>
        <p className='border-b'>
          Số lượng: <span>{item.quantity}</span> * {item.price.toLocaleString()}{' '}
          đ
        </p>
        <p>
          = <span>{(item.quantity * item.price).toLocaleString()} đ</span>
        </p>
        <button onClick={handleProduct}>
          <i className='ri-delete-bin-6-line pr-1'></i>
          Xóa sản phẩm
        </button>
      </td>
    </tr>
  );
};

const Form = () => {
  const [order, setOrder] = useState({
    userId: '01',
    userEmail: 'example@email.com',
    txtCustomerName: 'Yenny',
    txtPhone: '096225259',
    txtAddress: 'Việt Nam, Trái Đất',
    txtNote: 'nhanh cai chan len',
  });

  const validatePhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOrder((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <>
      <form action='' method='POST' onSubmit={handlePlaceOrder}>
        <div className='form-group'>
          <label htmlFor='txtCustomerName'>Tên</label>
          <input
            className='form-control'
            type='text'
            required
            placeholder='Tên người nhận'
            name='txtCustomerName'
            id='txtCustomerName'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='txtPhone'>Số điện thoại</label>
          <input
            className='form-control'
            type='text'
            required
            placeholder='Số điện thoại'
            name='txtPhone'
            id='txtPhone'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='txtAddress'>Địa chỉ nhận hàng</label>
          <input
            className='form-control'
            type='text'
            required
            placeholder='Địa chỉ nhận hàng'
            name='txtAddress'
            id='txtAddress'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='txtNote'>Ghi chú</label>
          <textarea
            className='form-control'
            type='text'
            placeholder='Ghi chú'
            name='txtNote'
            id='txtNote'
            onChange={handleChange}
          />
        </div>
      </form>
      <button
        className='primary__btn bg-secondary-color w-full mt-4'
        onClick={handlePlaceOrder}
      >
        <span>Đặt hàng</span>
      </button>
      <button className='secondary__btn border-secondary-color w-full mt-6'>
        <Link to='/'>Tiếp tục mua sắm</Link>
      </button>
    </>
  );
};

export default Cart;
