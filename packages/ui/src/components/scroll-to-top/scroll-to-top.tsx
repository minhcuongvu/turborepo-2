'use client';

import * as Icons from '@radix-ui/react-icons';
import styles from './scroll-to-top.module.css';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useState, useEffect } from 'react';

/* Icon & button now styled with Tailwind utility classes (no styled-components). */
const ScrollToTopButton = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className = '', style, ...props }, ref) => (
  <div
    ref={ref}
    /* Preserve any inline style while positioning according to the CSS variable padding. */
    style={{ bottom: 'var(--padding)', right: 'var(--padding)', ...style }}
    className={`group fixed flex items-center justify-center w-16 h-16 rounded-full cursor-pointer transition-transform duration-300 ease-in-out border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:border-transparent ${className}`}
    {...props}
  >
    <Icons.ChevronUpIcon className='w-12 h-12 text-current group-hover:text-white dark:group-hover:text-black' />
  </div>
));

const MotionComponent = motion.create(ScrollToTopButton);

export const ScrollToTop = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  // Check if the page has overflow (i.e., scrollable content)
  useEffect(() => {
    const checkOverflow = () => {
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      setHasOverflow(bodyHeight > windowHeight);
    };

    checkOverflow(); // Check on mount
    window.addEventListener('resize', checkOverflow); // Re-check on window resize

    return () => {
      window.removeEventListener('resize', checkOverflow); // Clean up event listener
    };
  }, []);

  // Event listener for scrolling and updating visibility
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Only check scroll progress if there's overflow (scrollable content)
    if (hasOverflow) {
      if (latest > 0.4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      // If no overflow, always show the button
      setIsVisible(false);
    }
  });

  // Function to handle the bounce and scroll behavior
  const handleClick = () => {
    setIsBouncing(true);

    // Trigger scroll after the bounce animation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsBouncing(false); // Reset the bounce state
    }, 80); // Adjust this time based on your bounce animation duration
  };

  return (
    <MotionComponent
      initial={{ opacity: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isBouncing ? 2 : 1,
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { type: 'spring', stiffness: 600, damping: 8 }, // Spring animation for bounce
      }}
      className={styles.btn}
      onClick={handleClick}
    />
  );
};
