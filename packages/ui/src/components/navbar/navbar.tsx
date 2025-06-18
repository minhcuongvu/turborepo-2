import styles from './navbar.module.css';

export const NavBarContainer = ({
  children,
}: {
  children: React.ReactNode | any;
}) => {
  return <div className={styles.container}>{children}</div>;
};

export const Navbar = ({ children, className, onClick }: { children: React.ReactNode | any, className?: string, onClick?: () => void }) => {
  return <nav className={`${styles.nav} ${className}`} onClick={onClick}>{children}</nav>;
};
