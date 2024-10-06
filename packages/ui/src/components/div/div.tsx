import styles from './div.module.css';
import { DivContainerProps } from '@repo/ui/interfaces';

export const DivContainer = ({
  children,
  className,
  customStyle,
  tailwindStyle,
}: DivContainerProps) => {
  const combinedClassNames = [className, customStyle?.string, tailwindStyle]
  .filter(Boolean)
  .join(' ')
  .trim();
  return <div className={combinedClassNames}>{children}</div>;
};

