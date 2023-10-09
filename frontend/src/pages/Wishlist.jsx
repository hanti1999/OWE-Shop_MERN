import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import ConvertVie from '../assets/data/ConvertVie';

const Wishlist = () => {
  const user = useSelector((state) => state.auth);
  const [newLoading, setLoadings] = useState([]);

  const {
    data: currentUser,
    loading,
    error,
  } = useFetch(`${BASE_URL}/users/${user.user._id}`);

  const { wishlist } = currentUser;

  const deleteWishlist = async (id, index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    try {
      const res = await fetch(`${BASE_URL}/wishlist/${id}`, {
        method: 'delete',
      });

      const result = await res.json();

      if (res.ok) {
        toast.success('Xoá thành công!');
      } else {
        toast.error(result.message);
      }

      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

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
              Tính năng này đang bảo trì! vui lòng quay lại sau
            </h4>
            <button className='mt-3 primary__btn'>
              <Link to='/shop'>Sản phẩm</Link>
            </button>
          </div>
        ) : (
          ''
        )}

        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          {!loading &&
            !error &&
            wishlist?.map((item, index) => (
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
                  <div className='flex justify-between'>
                    <span className='text-gray-500'>{item.gender}</span>
                    <Popconfirm
                      title='Cảnh báo'
                      description='Xóa sản phẩm khỏi danh sách yêu thích?'
                      okText='Có'
                      cancelText='Hủy'
                      onConfirm={() => deleteWishlist(item._id, index)}
                      loading={newLoading[index]}
                    >
                      <Button danger shape='circle' size='small'>
                        <i className='ri-delete-bin-2-line text-red-500'></i>
                      </Button>
                    </Popconfirm>
                  </div>
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
