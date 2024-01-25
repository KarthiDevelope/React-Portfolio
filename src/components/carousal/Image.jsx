import React from 'react';
import image from '../../assets/pictures/user.jpg';

const Image = () => {
  return (
    <div className='px-4 w-full	'>
      <img src={image} className='transition-all duration-400 blur-sm hover:blur-none max-w-full h-auto border-none rounded-full shadow align-end' alt='User' />
    </div>
  );
}

export default Image;
