// CarousalSectionMain.jsx
import React from 'react';
import ContentSection from './ContentSection';
import Image from './Image';
import styled from 'styled-components';

const CarousalSectionMain = () => {
  return (
    <BannerStyle>
      <div className='Main_Section'>
        <div className='Left_Section'>
          <ContentSection />
        </div>
        <div className='Right_Section'>
          <Image />
        </div>
      </div>
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
 }

`;
