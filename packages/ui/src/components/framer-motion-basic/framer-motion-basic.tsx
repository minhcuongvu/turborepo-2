'use client';

import styles from './framer-motion-basic.module.css';
import { motion, MotionProps } from 'framer-motion';

const MotionDiv = motion.div as React.ComponentType<React.HTMLAttributes<HTMLDivElement> & MotionProps>;

export const FramerMotionBasic = () => {
  const boxClassNames = [styles['box'], 'bg-black', 'dark:bg-white']
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <>
      <div className={styles['framer-motion-basic']}>
        <MotionDiv
          className={boxClassNames}
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
