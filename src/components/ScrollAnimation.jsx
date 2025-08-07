import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, animation, delay = 0, duration = 0.8, once = true }) => {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={animation || variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
