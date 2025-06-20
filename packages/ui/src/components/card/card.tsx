import styles from './card.module.css';

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): React.ReactElement {
  return (
    <a
      className={styles.card}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="text-green-500">
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
