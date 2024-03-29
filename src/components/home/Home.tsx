import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>
        <NavLink to="/useOutsideClick">useOutsideClick</NavLink>
      </div>
      <div>
        <NavLink to="/useLocalStorage">useLocalStorage</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
