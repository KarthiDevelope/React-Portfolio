import React from 'react';
import { NavbarMain } from './navbar/NavbarMain';
import CarousalSectionMain from './carousal/CarousalSectionMain';
import bg from "../assets/pictures/background.png";
import ThemeDark from './theme';
import About from './about/About';


const Home = () => {
  return (
    <>
      <div className=" bg-gray-100">
        <div className='relative max-w-screen-2xl mx-auto w-full bg-white dark:bg-black p-4 '>
          
          <NavbarMain background={bg} />
          <CarousalSectionMain background={bg} />
          <About />
        </div>
      </div>
    </>
  );
}

export default Home;
