'use client';

import * as Icons from '@radix-ui/react-icons';
import styles from './scroll-to-top.module.css';

export const ScrollToTop = () => {
  const classNames = [styles.btn, 'flex items-center justify-center w-16 h-16 rounded-full border-2 border-solid border-blue-500'].join(' ').trim();
  return (
    <div
      className={classNames}
      id="cta"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icons.ChevronUpIcon className={styles.icon} height='48' width='48' />
    </div>
  );
};
