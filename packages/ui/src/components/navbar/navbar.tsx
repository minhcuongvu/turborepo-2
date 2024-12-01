import styles from './navbar.module.css';

export const NavBarContainer = ({
  children,
}: {
  children: React.ReactNode | any;
}) => {
  return <div className={styles.container}>{children}</div>;
};

export const Navbar = ({ children }: { children: React.ReactNode | any }) => {
  return <navbar-component className={styles.nav}>{children}</navbar-component>;
};
