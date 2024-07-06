import styles from './side-bar.module.css';

export const SideBar = ({ children }: { children?: React.ReactNode | any }) => {
  return (
    <div className={styles['side-bar']}>
      <div className={styles['side-bar-items-container']}>{children}</div>
    </div>
  );
};
