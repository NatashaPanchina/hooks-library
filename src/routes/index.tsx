import { createBrowserRouter, Navigate } from 'react-router-dom';
import OutsideClick from '../hooks/outsideClick/OutsideClick';
import LocalStorage from '../hooks/localStorage/LocalStorage';
import Home from '../components/home/Home';
import Docs from '../components/docs/Docs';
import Fetch from '../hooks/fetch/Fetch';
import Toggle from '../hooks/toggle/Toggle';
import Pagination from '../hooks/pagination/Pagination';
import About from '../components/about/About';
import PreferredLanguage from '../hooks/preferredLanguage/PreferredLanguage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="/about" />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'docs',
        element: <Docs />,
        children: [
          {
            path: 'useFetch',
            element: <Fetch />,
          },
          {
            path: 'useLocalStorage',
            element: <LocalStorage />,
          },
          {
            path: 'useOutsideClick',
            element: <OutsideClick />,
          },
          {
            path: 'usePagination',
            element: <Pagination />,
          },
          {
            path: 'usePreferredLanguage',
            element: <PreferredLanguage />,
          },
          {
            path: 'useToggle',
            element: <Toggle />,
          },
        ],
      },
    ],
  },
]);
