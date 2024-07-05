export const LinksPanel = ({
  children,
}: {
  children: React.ReactNode | any;
}) => {
  return (
    <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {children}
    </div>
  );
};
