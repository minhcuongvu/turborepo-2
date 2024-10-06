import { BaseContainerProps } from '../../interfaces';
import styles from './root.module.css';

export const Root = ({ children, className }: BaseContainerProps) => {
  const combinedClassnames = [ styles.root,
    className
  ]
  .filter(Boolean)
  .join(' ')
  .trim(); 
  return (
    <root className={combinedClassnames}>{children}</root>
  );
};

