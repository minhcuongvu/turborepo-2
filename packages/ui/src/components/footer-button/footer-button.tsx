'use client';

import { Button } from '../button/button';
import styles from './footer-button.module.css';

export const FooterButton = ({
  children,
}: {
  children?: React.ReactNode | any;
}) => {
  function handleClick() {
    console.log('Show footer pls');
  }
  return (
    <>
      <div className={styles['footer-button']}>
        <Button type="button" appName="web" onClick={handleClick}>
          Info
        </Button>
      </div>
    </>
  );
};
