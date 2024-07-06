import styles from './navbar.module.css';

export const Navbar = ({ children }: { children: React.ReactNode | any }) => {
  return (
    <div className={styles['container']}>
      <nav className={styles['nav']}>{children}</nav>
    </div>
  );
};
