import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import ConvertVie from '../assets/data/ConvertVie';
import { Link } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const {
    data: currentUser,
    loading,
    error,
  } = useFetch(`${BASE_URL}/users/${user._id}`);

  const { wishlist } = currentUser;

  return (
    <section>
      <div className='container'>
        {loading && (
          <h4 className='animate-pulse text-2xl text-center'>
            <LoadingOutlined /> Đang tải...
          </h4>
        )}

        {wishlist?.length === 0 ? (
          <div className='text-center'>
            <h4 className='text-2xl text-center'>
              Chưa có sản phẩm trong wishlist
            </h4>
            <button className='mt-3 primary__btn'>
              <Link to='/shop'>Thêm sản phẩm ngay!</Link>
            </button>
          </div>
        ) : (
          ''
        )}

        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          {!loading &&
            !error &&
            wishlist?.map((item) => (
              <div
                key={item._id}
                className='shadow-md rounded hover:shadow-2xl transition-all overflow-hidden'
              >
                <Link
                  to={`/shop/products/${ConvertVie(item.title)}-${
                    item.productId
                  }`}
                  className='aspect-square block'
                >
                  <img
                    src={item.productImg}
                    className='object-cover h-full w-full'
                    alt=''
                  />
                </Link>
                <div className='product__info p-2'>
                  <span className='text-gray-500'>{item.gender}</span>
                  <Link
                    to={`/shop/products/${ConvertVie(item.title)}-${
                      item.productId
                    }`}
                  >
                    <h4 className='font-semibold'>{item.title}</h4>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
