'use client';

import { BaseContainerProps } from '../../interfaces';
import styles from './footer.module.css';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: white;
  transition: background-color 0.3s ease;
`;

export const Footer = ({ children, className }: BaseContainerProps) => {
  const combinedClassNames = [styles.footer, className]
    .filter(Boolean)
    .join(' ')
    .trim();

  return <StyledFooter className={combinedClassNames}>{children}</StyledFooter>;
};
