import styles from './header.module.css';

export const Header = ({ children }: { children: React.ReactNode | any }) => {
  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <div className={styles['item']}>{children}</div>
      </div>
    </header>
  );
};
