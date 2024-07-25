'use client';

import styles from './framer-motion-basic.module.css';
import { motion } from 'framer-motion';

export const FramerMotionBasic = () => {
  return (
    <>
      <div className={styles['framer-motion-basic']}>
        <motion.div
          className={styles['box']}
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
      </div>
    </>
  );
};
