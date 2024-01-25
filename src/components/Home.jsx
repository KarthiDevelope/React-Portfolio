import React from 'react';
import { NavbarMain } from './navbar/NavbarMain';
import CarousalSectionMain from './carousal/CarousalSectionMain';

const Home = () => {
  return (
    <>
      <div className=" bg-gray-100">
      <div className='relative max-w-screen-2xl mx-auto w-full bg-white p-4'>
        <NavbarMain />
        <CarousalSectionMain />
      </div>
      </div>
    </>
  );
}

export default Home;
