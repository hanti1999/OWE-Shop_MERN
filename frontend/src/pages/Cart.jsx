import React from 'react';
import '../styles/cart.css';

import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const validatePhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

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
                        Phí Giao hàng: 25.000đ (Miễn phí với đơn hàng từ 500k)
                      </p>
                      <p>
                        Tổng:{' '}
                        <span className='text-red-500 text-lg'>
                          {totalAmount <= 500000
                            ? (totalAmount + 25000).toLocaleString()
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

export default Cart;

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
  return (
    <>
      <form action='' method='POST'>
        <div className='form-group'>
          <label htmlFor='txtCustomerName'>Tên</label>
          <input
            className='form-control'
            type='text'
            required
            placeholder='Tên người nhận'
            name='txtCustomerName'
            id='txtCustomerName'
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
          />
        </div>
      </form>
      <button className='primary__btn bg-secondary-color w-full mt-4'>
        <a href='#'>Đặt hàng</a>
      </button>
      <button className='secondary__btn border-secondary-color w-full mt-6'>
        <Link to='/'>Tiếp tục mua sắm</Link>
      </button>
    </>
  );
};
