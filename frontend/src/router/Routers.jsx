import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import TShirt from '../pages/TShirt';
import TShirtDetails from '../pages/TShirtDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import About from '../pages/About'
import Contact from '../pages/Contact';

export const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/t-shirt',
        element: <TShirt />,
      },
      {
        path: '/t-shirt/:id',
        element: <TShirtDetails />,
      },
      {
        path: '/t-shirt/search',
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
    ],
  },
]);
