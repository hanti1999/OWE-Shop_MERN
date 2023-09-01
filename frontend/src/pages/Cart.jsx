import React from 'react';
import '../styles/cart.css';

import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <section>
      <div className='container'>
        <div className='cart__wrapper grid grid-cols-12 md:gap-3'>
          <div className='md:col-span-9 col-span-12'>
            {cartItems.length === 0 ? (
              <div className='text-xl text-center font-medium'>
                Chưa có sản phẩm trong giỏ hàng!
              </div>
            ) : (
              <table className='table w-full max-md:text-sm'>
                <thead>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <th>Kích thước</th>
                    <th>Đơn giá</th>
                    <th>SL</th>
                    <th>Xóa</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item, index) => (
                    <Tr item={item} key={index} />
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className='md:col-span-3 col-span-12'>
            <div className='flex justify-between items-center max-md:mt-6'>
              <h6>Tổng tiền:</h6>
              <span className='font-bold md:text-xl'>
                {totalAmount.toLocaleString()} đ
              </span>
            </div>
            <p className='mt-4'>
              Thuế và phí vận chuyển sẽ được tính khi thanh toán
            </p>
            <div className='text-white'>
              <button className='primary__btn bg-secondary-color w-full mt-6'>
                <Link to='/shop'>Tiếp tục mua sắm</Link>
              </button>
              <button className='primary__btn bg-secondary-color w-full mt-4'>
                <Link to='/checkout'>Thanh toán</Link>
              </button>
            </div>
          </div>
        </div>
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
      <td>{item.title}</td>
      <td>{item.size}</td>
      <td>{item.price.toLocaleString()}</td>
      <td>{item.quantity}</td>
      <td>
        <i
          onClick={handleProduct}
          className='ri-delete-bin-5-line cursor-pointer'
        ></i>
      </td>
    </tr>
  );
};
