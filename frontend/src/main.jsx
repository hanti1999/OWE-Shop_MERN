import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import 'remixicon/fonts/remixicon.css';

import { Routers } from './router/Routers.jsx';
import store from './redux/store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>
);
