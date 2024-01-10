import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import BackForwardButtons from '../components/BackForwardButtons';

const MainLayout = () => {
  return (
    <div>
      <Header />

      <BackForwardButtons />
      <Outlet />
    </div>
  );
};

export default MainLayout;
