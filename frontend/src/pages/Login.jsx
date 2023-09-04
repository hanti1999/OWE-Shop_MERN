import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
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
          <form className='space-y-6' method='POST' action='#'>
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
                  className='block w-full rounded-md border py-1.5 px-2 shadow-sm sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6'
                  placeholder='Email...'
                >
                  Mật khẩu
                </label>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold text-secondary-color hover:text-primary-color'
                  >
                    Quên mật khẩu?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Mật khẩu...'
                  onChange={handleChange}
                  required
                  className='block w-full rounded-md border py-1.5 px-2 shadow-sm sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className='primary__btn w-full !rounded-md'
                type='submit'
              >
                <span>Đăng nhập</span>
              </button>
            </div>
          </form>

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
