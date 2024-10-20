'use client';

import * as Icons from '@radix-ui/react-icons';
import styles from './scroll-to-top.module.css';
import styled from 'styled-components';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useState, useEffect } from 'react';

// Create a styled button using styled-components for the container
const ScrollButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem; // 64px
  height: 4rem; // 64px
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: var(--padding);
  right: var(--padding);
  transition: transform 0.3s ease;
  border: 2px solid var(--accent-10);

  &:hover {
    background: var(--accent-10);
    border: none;
    svg {
      color: var(--background-color);
    }
  }
`;

const Icon = styled(Icons.ChevronUpIcon)`
  width: 3rem; // 48px
  height: 3rem; // 48px
  color: var(--accent-10);
`;

// ScrollToTop button as a functional component with forwarded ref
const ScrollToTopButton = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => (
  <ScrollButton ref={ref} {...props}>
    <Icon />
  </ScrollButton>
));

const MotionComponent = motion(ScrollToTopButton);

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
        scale: isBouncing ? 1.4 : 1,
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { type: 'spring', stiffness: 600, damping: 10 }, // Spring animation for bounce
      }}
      className={styles.btn}
      onClick={handleClick}
    />
  );
};
