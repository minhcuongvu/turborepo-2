import { Main } from '@repo/ui/components';

export default function MainComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Main>
      <MainContentWrapper>{children}</MainContentWrapper>
    </Main>
  );
}

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-grow px-5 pt-20 pb-10 flex flex-col items-center">
      {children}
    </div>
  );
};
