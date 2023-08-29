import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'remixicon/fonts/remixicon.css';

import { Routers } from './router/Routers.jsx';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routers} />
    </Provider>
  </React.StrictMode>
);
