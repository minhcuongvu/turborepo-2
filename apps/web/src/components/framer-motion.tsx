'use client';
import { motion } from 'framer-motion';

export default function FramerBasic() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      // https://www.framer.com/motion/animate-function/
      animate={{ opacity: 1, scale: 1 }}
      // https://www.framer.com/motion/transition/
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    />
  );
}
