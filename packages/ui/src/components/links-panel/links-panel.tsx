import styles from './links-panel.module.css';
export const LinksPanel = ({
  children,
}: {
  children: React.ReactNode | any;
}) => {
  return <div className={styles['links-panel']}>{children}</div>;
};
