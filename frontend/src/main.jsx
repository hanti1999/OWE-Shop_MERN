import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'remixicon/fonts/remixicon.css';

import { Routers } from './router/Routers.jsx';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/AuthContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss={false}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
          theme='dark'
        />
        <RouterProvider router={Routers} />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
