import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'remixicon/fonts/remixicon.css';
// import 'bootstrap/dist/css/bootstrap.css';

import { Routers } from './router/Routers.jsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>
);
