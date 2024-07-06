import styles from './main-container.module.css';

export const MainContainer = ({
  children,
}: {
  children: React.ReactNode | any;
}) => {
  return (
    <>
      <div className={styles['main-container']}>{children}</div>
    </>
  );
};
