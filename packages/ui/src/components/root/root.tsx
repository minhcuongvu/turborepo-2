import { DivContainer } from '../div/div';
import styles from './root.module.css';

export const Root = ({ children }: { children: React.ReactNode | any }) => {
  const combinedClassnames = [ styles.root ]
  .filter(Boolean)
  .join(' ')
  .trim(); 
  return (
    <root className={combinedClassnames}>{children}</root>
  );
};

