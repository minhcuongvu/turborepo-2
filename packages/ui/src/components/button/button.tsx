'use client';

import styles from './button.module.css';
import { ButtonProps } from '@repo/ui/interfaces';

export const Button = ({
  children,
  className,
  type,
  onClick,
  direction,
  haveBorder,
  disabled,
}: ButtonProps) => {
  const combinedClassName = `
    ${styles['button']} 
    ${className || ''} 
    ${haveBorder ? styles['have-border'] : ''} 
    ${direction === 'top' ? styles['top'] : ''} 
    ${direction === 'right' ? styles['right'] : ''} 
    ${direction === 'bottom' ? styles['bottom'] : ''} 
    ${direction === 'left' ? styles['left'] : ''} 
    ${direction === 'top-left' ? styles['top-left'] : ''} 
    ${direction === 'top-right' ? styles['top-right'] : ''} 
    ${direction === 'bottom-left' ? styles['bottom-left'] : ''} 
    ${direction === 'bottom-right' ? styles['bottom-right'] : ''}
  `.trim();

  return (
    <button
      className={combinedClassName}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ButtonRect = ({
  children,
  className,
  type,
  onClick,
  direction,
  haveBorder,
}: ButtonProps) => {
  const combinedClassName = `
    ${styles['button-rect']} 
    ${className || ''} 
    ${haveBorder ? styles['have-border'] : ''} 
    ${direction === 'top' ? styles['top'] : ''} 
    ${direction === 'right' ? styles['right'] : ''} 
    ${direction === 'bottom' ? styles['bottom'] : ''} 
    ${direction === 'left' ? styles['left'] : ''} 
    ${direction === 'top-left' ? styles['top-left'] : ''} 
    ${direction === 'top-right' ? styles['top-right'] : ''} 
    ${direction === 'bottom-left' ? styles['bottom-left'] : ''} 
    ${direction === 'bottom-right' ? styles['bottom-right'] : ''}
  `.trim();

  return (
    <button className={combinedClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
