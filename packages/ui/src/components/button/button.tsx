'use client';

import { ReactNode, useState } from 'react';
import styles from './button.module.css';
import { ButtonProps } from '@repo/ui/interfaces';

export const Button = ({
  children,
  id,
  className,
  type,
  appName,
  onClick,
}: ButtonProps) => {
  const combinedClassname = className
    ? `${styles.button} ${className}`
    : `${styles.button}`;

  return (
    <button id={id} className={combinedClassname} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
