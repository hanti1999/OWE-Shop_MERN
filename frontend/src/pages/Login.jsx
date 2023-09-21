import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import { Button, Form, Input } from 'antd';
import { toast } from 'react-toastify';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(loginInfo),
      });

      const result = await res.json();
      if (res.ok) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        toast.success('Đăng nhập thành công!');
        navigate('/');
      } else {
        toast.error('Tài khoản hoặc mật khẩu sai!');
      }
      setLoading(false);
    } catch (err) {
      toast.error('Tài khoản hoặc mật khẩu sai!');
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h1 className='text-4xl text-center w-full font-cherry-bomb-one'>
            OWE
          </h1>
          <h2 className='mt-8 text-center text-2xl font-bold leading-9 tracking-tight'>
            Đăng nhập
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <Form className='space-y-6' layout='vertical'>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Nhập email của bạn!',
                },
              ]}
            >
              <Input size='large' onChange={handleChange} />
            </Form.Item>

            <Form.Item
              label='Mật khẩu'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Nhập mật khẩu của bạn!',
                },
              ]}
            >
              <Input.Password onChange={handleChange} size='large' />
            </Form.Item>

            <Form.Item>
              <Button
                onClick={handleLogin}
                className=' bg-secondary-color w-full'
                size='large'
                htmlType='submit'
                loading={loading}
              >
                <span className='text-white hover:text-inherit'>Đăng nhập</span>
              </Button>
            </Form.Item>
          </Form>

          <p className='mt-4 text-center text-sm'>
            Chưa có tài khoản?{' '}
            <Link
              to='/register'
              className='font-semibold leading-6 text-secondary-color hover:text-primary-color'
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
