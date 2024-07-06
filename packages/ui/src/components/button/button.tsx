'use client';

import { ReactNode } from 'react';
import styles from './button.module.css';
import { ButtonProps } from '@repo/ui/interfaces';

export const Button = ({ children, className, type, appName }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} type={type}>
      {children}
    </button>
  );
};
