import styles from './div.module.css';
import { DivContainerProps } from '@repo/ui/interfaces';

export const DivContainer = ({
  children,
  customStyle,
  tailwindStyle,
}: DivContainerProps) => {
  const combinedClassNames = `
${customStyle?.div1 !== undefined ? styles['div1'] : ''}
${tailwindStyle !== undefined ? tailwindStyle : ''}
`.trim();

  return <div className={combinedClassNames}>{children}</div>;
};

