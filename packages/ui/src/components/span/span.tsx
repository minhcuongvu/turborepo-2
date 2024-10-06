import styles from './span.module.css';
import { SpanContainerProps } from '@repo/ui/interfaces';

export const SpanContainer = ({
  children,
  className,
  customStyle,
  tailwindStyle,
}: SpanContainerProps) => {
  const combinedClassNames = [className, customStyle?.string, tailwindStyle]
  .filter(Boolean)
  .join(' ')
  .trim();
  return <span className={combinedClassNames}>{children}</span>;
};

