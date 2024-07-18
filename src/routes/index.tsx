import { createBrowserRouter } from 'react-router-dom';
import OutsideClick from '../hooks/outsideClick/OutsideClick';
import LocalStorage from '../hooks/localStorage/LocalStorage';
import Home from '../components/home/Home';
import Docs from '../components/docs/Docs';
import Fetch from '../hooks/fetch/Fetch';
import Toggle from '../hooks/toggle/Toggle';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'docs',
        element: <Docs />,
        children: [
          {
            path: 'useOutsideClick',
            element: <OutsideClick />,
          },
          {
            path: 'useLocalStorage',
            element: <LocalStorage />,
          },
          {
            path: 'useFetch',
            element: <Fetch />,
          },
          {
            path: 'useToggle',
            element: <Toggle/>
          }
        ],
      },
    ],
  },
]);
