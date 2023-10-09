import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Result } from 'antd';

import { AuthContext } from '../context/AuthContext';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  const {
    data: currentUser,
    loading,
    error,
  } = useFetch(`${BASE_URL}/users/${user._id}`);

  return (
    <section>
      {loading && (
        <h4 className='animate-pulse text-2xl text-center'>
          <LoadingOutlined /> Đang kiểm tra tài khoản...
        </h4>
      )}

      {currentUser.role === 'admin' && !loading && <Outlet />}
      {currentUser.role != 'admin' && !loading && (
        <Result
          status='403'
          title='403'
          subTitle='Xin lỗi! bạn không có quyền truy cập trang này!'
          extra={
            <button className='primary__btn'>
              <Link to='/'>Trở về trang chủ</Link>
            </button>
          }
        />
      )}
    </section>
  );
};

export default PrivateRoute;
