import styles from './root.module.css';

export const Root = ({ children }: { children: React.ReactNode | any }) => {
  return (
    <>
      <div className={styles.root}>{children}</div>
    </>
  );
};
