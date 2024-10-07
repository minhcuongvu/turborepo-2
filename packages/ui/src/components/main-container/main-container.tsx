import styles from './main-container.module.css';

export const MainContainer = ({
  children,
}: {
  children: React.ReactNode | any;
}) => {
  return <div className={styles['container']}>{children}</div>;
};
