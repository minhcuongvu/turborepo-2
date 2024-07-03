export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <>
      <span>
        Code:&nbsp;<code className={className}>{children}</code>
      </span>
    </>
  );
}
