import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { toast } from 'react-toastify';

import { cartActions } from '../redux/slices/cartSlice';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import '../styles/cart.css';

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
                        Phí Giao hàng:
                        <span>
                          {totalAmount <= 500000
                            ? ` ${servicePee.toLocaleString()}`
                            : ` 0`}
                          đ
                        </span>
                        (Miễn phí với đơn hàng từ 500k)
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
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const validatePhoneNumber = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;

  const [order, setOrder] = useState({
    userId: user?._id,
    userEmail: user?.email,
    fullName: undefined,
    phone: undefined,
    address: undefined,
    note: undefined,
    cart: cartItems,
  });

  const handleChange = (e) => {
    setOrder((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (validatePhoneNumber.test(phone.value) === false) {
        toast.error('Số điện thoại không hợp lệ!');
        setLoading(false);
      } else {
        const res = await fetch(`${BASE_URL}/cart`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        });

        const result = await res.json();

        if (res.ok) {
          navigate('/thank-you');
          setLoading(false);
        } else {
          toast.error(result.error);
          setLoading(false);
        }
      }
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <form method='POST'>
        <div className='form-group'>
          <label htmlFor='fullName'>Tên</label>
          <input
            className='form-control'
            type='text'
            required
            placeholder='Tên người nhận'
            name='fullName'
            id='fullName'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Số điện thoại</label>
          <input
            className='form-control'
            type='text'
            required
            placeholder='Số điện thoại'
            name='phone'
            id='phone'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Địa chỉ nhận hàng</label>
          <input
            className='form-control'
            type='text'
            required
            placeholder='Địa chỉ nhận hàng'
            name='address'
            id='address'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='note'>Ghi chú</label>
          <textarea
            className='form-control'
            type='text'
            placeholder='Ghi chú'
            name='note'
            id='note'
            onChange={handleChange}
          />
        </div>
      </form>
      <Button
        onClick={handlePlaceOrder}
        className='bg-secondary-color w-full mt-4'
        shape='round'
        size='large'
        loading={loading}
      >
        <span className='text-lg text-white'>Đặt hàng</span>
      </Button>

      <Button
        className='border-secondary-color w-full mt-4'
        shape='round'
        size='large'
      >
        <Link className='text-lg' to='/'>
          Tiếp tục mua sắm
        </Link>
      </Button>
    </>
  );
};

export default Cart;
