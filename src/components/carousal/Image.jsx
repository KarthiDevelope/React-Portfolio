import React, { useEffect, useState } from 'react';
import image from '../../assets/pictures/user.jpg';
import { motion, useMotionValue,MotionConfig } from "framer-motion";
import { motion as motions } from "framer-motion-3d"

const Image = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hovered, setIsHover] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

   const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2
  };

  return (
    <MotionConfig transition={transition}>
    <motions.div whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={hovered ? "hover" : "rest"}
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.5 },
        press: { scale: 1.4 }
      }}
      onHoverStart={() => {
        resetMousePosition();
        setIsHover(true);
      }}
      onHoverEnd={() => {
        resetMousePosition();
        setIsHover(false);
      }}
      >
      <motion.div
        animate={animationComplete ? { y: 150, transform: "translateY(60px)" } : hovered ? { rotateX: 5 } : {}}
        initial={{ y: "100%", position: "top", transform: "translateY(-300px)" }}
        transition={{
          type: "spring",
          restSpeed: 5,
          stiffness: 40,
          duration: 800,
          ease: "easeInOut",
        }}
        className='px-4 w-2/3'
      >
        <img
          src={image}
          className='transition-all duration-400 blur-sm hover:blur-none max-w-full h-auto border-none rounded-3xl shadow align-end'
          alt='User'
        />
      </motion.div>
    </motions.div>
    </MotionConfig>
  );
};

export default Image;
