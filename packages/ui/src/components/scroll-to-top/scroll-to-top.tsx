'use client';

import * as Icons from '@radix-ui/react-icons';
import styles from './scroll-to-top.module.css';
import styled from 'styled-components';

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

export const ScrollToTop = () => {
  return (
    <ScrollButton
      className={`${styles.btn}`}
      id="cta"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon />
    </ScrollButton>
  );
};
