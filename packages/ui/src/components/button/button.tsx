'use client';

import styles from './button.module.css';
import { ButtonProps } from '@repo/ui/interfaces';

// https://codepen.io/jh3y/pen/dyqzzaV
// https://codepen.io/jh3y/pen/VwGKbKP
// https://codepen.io/jh3y/pen/LYJNvyE
// https://codepen.io/jh3y/pen/XWMobqx
// https://codepen.io/jh3y/pen/eYZZdeK

export const Button = ({
  children,
  className,
  type,
  onClick,
  direction,
  haveBorder,
  disabled,
  id,
  customStyle,
}: ButtonProps) => {
  const combinedClassName = `
    ${
      customStyle === 'round'
        ? styles['button']
        : customStyle === 'rect'
          ? styles['button-rect']
          : styles['button']
    } 
    ${className || ''} 
    ${haveBorder ? styles['have-border'] : ''} 
    ${direction === 'top' ? styles['top'] : ''} 
    ${direction === 'top-right' ? styles['top-right'] : ''} 
    ${direction === 'top-left' ? styles['top-left'] : ''} 
    ${direction === 'top-left-right' ? styles['top-left-right'] : ''} 
    ${direction === 'right' ? styles['right'] : ''} 
    ${direction === 'right-top-bottom' ? styles['right-top-bottom'] : ''} 
    ${direction === 'left' ? styles['left'] : ''} 
    ${direction === 'left-top-bottom' ? styles['left-top-bottom'] : ''} 
    ${direction === 'bottom' ? styles['bottom'] : ''} 
    ${direction === 'bottom-right' ? styles['bottom-right'] : ''}
    ${direction === 'bottom-left' ? styles['bottom-left'] : ''} 
    ${direction === 'bottom-left-right' ? styles['bottom-left-right'] : ''} 
    `.trim();

  return (
    <button
      id={id}
      className={combinedClassName}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
