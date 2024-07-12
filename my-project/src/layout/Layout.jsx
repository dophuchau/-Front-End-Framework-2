import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../client/components/header/header';


const Layout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="content-wrapper">
        <div className="content ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
