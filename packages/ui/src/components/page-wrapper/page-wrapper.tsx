import styles from './page-wrapper.module.css'

export const PageWrapper = ({ children }: { children?: React.ReactNode | any }) => {
  return (
    <div className={ styles['page-wrapper']}>
      {children}
    </div>
  );
};
