import styles from './navbar.module.css';

export const NavBarContainer = ({
  children,
}: {
  children: React.ReactNode | any;
}) => {
  return <navbar className={styles['container']}>{children}</navbar>;
};

export const Navbar = ({ children }: { children: React.ReactNode | any }) => {
  return <navbar className={styles['nav']}>{children}</navbar>;
};
