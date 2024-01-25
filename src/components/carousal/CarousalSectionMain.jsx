// CarousalSectionMain.jsx
import React from 'react';
import ContentSection from './ContentSection';
import "../../App.css"
import styled from 'styled-components';
import Laptop from '../3dmodals/Laptop';
import ScrollIndicator from '../ScrollMouse';


const CarousalSectionMain = ({ background }) => {
  return (
    <BannerStyle background={background}>
      <div className='Main_Section'>
        <div className='Left_Section'>
          <ContentSection />
        </div>
        <div
          className='Right_Section'>
          <Laptop />
        </div>

      </div>
      <ScrollIndicator />
    </BannerStyle>
  );
}

export default CarousalSectionMain;

const BannerStyle = styled.div`

  .Main_Section {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

 .Left_Section {
  width: 40%;
 }

 .Right_Section {
  width: 50%;
  display: flex;
  place-content: center;
  align-items: center;
  justify-content: center;
  /* background-image: url(${props => props.background}); */
  background-repeat: no-repeat;
  height: 100vh;
  background-position: center;

 }

`;

