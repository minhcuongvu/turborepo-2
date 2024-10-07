import { BaseContainerProps } from '../../interfaces';
import styles from './footer.module.css';

export const Footer = ({ children, className }: BaseContainerProps) => {
  const combinedClassNames = [styles.footer, className]
    .filter(Boolean)
    .join(' ')
    .trim();
  return <footer className={combinedClassNames}>{children}</footer>;
};
