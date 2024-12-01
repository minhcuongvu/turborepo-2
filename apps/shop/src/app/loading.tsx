import MainComponent from '@/components/layout/main';
import { ThemeProvider } from 'next-themes';

export default function Loading() {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  );
}
