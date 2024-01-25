import React, { useEffect, useState } from 'react';
import '../App.css'; // Create a separate CSS file for styling

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the scroll indicator when scrolling down
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-indicator ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="mousey">
        <div className="scroller"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
