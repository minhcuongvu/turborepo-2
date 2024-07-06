'use client';

import { ReactNode } from 'react';
import styles from './button.module.css';
import { ButtonProps } from '@repo/ui/interfaces';

export const Button = ({
  children,
  className,
  type,
  appName,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
