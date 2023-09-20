import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import { toast } from 'react-toastify';
import { Button } from 'antd';

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
          <form className='space-y-6' method='POST' action='#'>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6'
              >
                Tên tài khoản
              </label>
              <div className='mt-2'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  placeholder='Tên tài khoản...'
                  onChange={handleChange}
                  required
                  className='outline-secondary-color block w-full rounded-md border py-1.5 px-2 shadow-sm sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Email
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email...'
                  onChange={handleChange}
                  required
                  className='outline-secondary-color block w-full rounded-md border py-1.5 px-2 shadow-sm sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6'
                >
                  Mật khẩu
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Mật khẩu...'
                  onChange={handleChange}
                  required
                  className='outline-secondary-color block w-full rounded-md border py-1.5 px-2 shadow-sm sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <Button
                onClick={handleRegister}
                className='w-full bg-secondary-color'
                size='large'
                loading={loading}
              >
                <span className='text-white hover:text-inherit'>
                  Tạo tài khoản
                </span>
              </Button>
            </div>
          </form>

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
