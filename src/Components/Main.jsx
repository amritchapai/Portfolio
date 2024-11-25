import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
}

export default Main