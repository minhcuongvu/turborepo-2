import styles from './code.module.css';

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <span className={className}>
      Code:&nbsp;<code className={styles.code}>{children}</code>
    </span>
  );
}
