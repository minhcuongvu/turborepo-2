import styles from './page-wrapper.module.css';

export const PageWrapper = ({
  children, className
}: {
  children?: React.ReactNode | any;
  className?: string;
}) => {
  return <div className={`${styles.pageWrapper} ${className}`}>{children}</div>;
};
