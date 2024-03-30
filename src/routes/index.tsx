import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import OutsideClick from '../hooks/outsideClick/OutsideClick';
import LocalStorage from '../hooks/localStorage/LocalStorage';
import Home from '../components/home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'useOutsideClick',
        element: <OutsideClick />,
      },
      {
        path: 'useLocalStorage',
        element: <LocalStorage />,
      },
    ],
  },
]);