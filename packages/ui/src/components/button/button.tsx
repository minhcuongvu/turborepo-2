'use client';

import { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  type?: 'button' | 'submit' | 'reset'; // Specify the possible values for type
}

export const Button = ({ children, className, type, appName }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} type={type}>
      {children}
    </button>
  );
};
