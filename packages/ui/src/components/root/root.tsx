import { BaseContainerProps } from '../../interfaces';
import styles from './root.module.css';

export const Root = ({ children, className }: BaseContainerProps) => {
  const combinedClassnames = [styles.main, className]
    .filter(Boolean)
    .join(' ')
    .trim();
  return <main className={combinedClassnames}>{children}</main>;
};
