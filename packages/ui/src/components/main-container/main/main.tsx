import styles from './main.module.css';

export const Main = ({ children }: { children: React.ReactNode | any }) => {
  return (
    <main role="main" className={styles.main}>
      {children}
    </main>
  );
};
