import { BaseContainerProps } from '../../interfaces';
import styles from './root.module.css';

export const Root = ({ children, className }: BaseContainerProps) => {
  const combinedClassnames = [styles.root, className]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <root-component className={combinedClassnames}>{children}</root-component>
  );
};
