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

export const FooterButton = ({
  children,
  id,
  className,
  type,
  appName,
}: ButtonProps) => {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    setChecked(!checked);
  }

  const combinedClassname = className
    ? `${styles.button} ${className}`
    : `${styles.button}`;

  return (
    <>
      <div className={styles['menu-toggle']}>
        <button
          className={combinedClassname}
          type={type}
          onClick={handleClick}
          data-opened={checked}
        >
          {children}
        </button>

        <ul className={styles['menu']}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
