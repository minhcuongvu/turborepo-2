import styles from './header.module.css';

export const Header = ({ children, className }: { children: React.ReactNode | any, className?: string }) => {
  return <header className={`${className}`}>{children}</header>;
};
