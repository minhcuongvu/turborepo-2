import styles from './tab.module.css';

export const Tab = ({ children }: { children: React.ReactNode | any }) => {
  return <div className={styles.tab}>{children}</div>;
};
