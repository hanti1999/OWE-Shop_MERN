import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import { toast } from 'react-toastify';
import { Button, Form, Input } from 'antd';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [registerInfo, setRegisterInfo] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setRegisterInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(registerInfo),
      });

      if (res.ok) {
        dispatch({ type: 'REGISTER_SUCCESS' });
        toast.success('Tạo tài khoản thành công');
        navigate('/login');
      } else {
        toast.error('Đăng ký không thành công! vui lòng thử lại');
        setLoading(false);
      }
    } catch (err) {
      toast.error('Đăng ký không thành công! vui lòng thử lại');
      console.alert(err.message);
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
            Đăng ký
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <Form className='space-y-6' layout='vertical'>
            <Form.Item
              label='Tên tài khoản'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Nhập tên tài khoản!',
                },
              ]}
            >
              <Input onChange={handleChange} size='large' />
            </Form.Item>

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
                onClick={handleRegister}
                className=' bg-secondary-color w-full'
                size='large'
                htmlType='submit'
                loading={loading}
              >
                <span className='text-white hover:text-inherit'>Đăng Ký</span>
              </Button>
            </Form.Item>
          </Form>

          <p className='mt-4 text-center text-sm'>
            Đã có tài khoản?{' '}
            <Link
              to='/login'
              className='font-semibold leading-6 text-secondary-color hover:text-primary-color'
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
