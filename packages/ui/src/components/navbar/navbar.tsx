import styles from './navbar.module.css';

export const Navbar = ({ children }: { children: React.ReactNode | any }) => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>{children}</nav>
    </div>
  );
};
