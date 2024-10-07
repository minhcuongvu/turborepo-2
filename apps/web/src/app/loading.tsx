import MainComponent from '@/components/layout/main';
import { ThemeProvider } from '@/components/theme';

export default function Loading() {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  );
}
