import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import TShirt from '../pages/TShirt';
import TShirtDetails from '../pages/TShirtDetails';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import About from '../pages/About'
import Contact from '../pages/Contact';
import Support from '../pages/Support';
import PageNotFound from '../pages/PageNotFound';

export const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/:id',
        element: <ProductDetails />,
      },
      {
        path: '/shop/search',
        element: <SearchResultList />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/support',
        element: <Support />,
      },
    ],
  },
]);
