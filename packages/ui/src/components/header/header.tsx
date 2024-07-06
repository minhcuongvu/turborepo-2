import styles from './header.module.css';

export const Header = ({ children }: { children: React.ReactNode | any }) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-items-container']}>
        <div className={styles['header-item']}>{children}</div>
      </div>
    </header>
  );
};
