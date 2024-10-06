import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets' | 'theme' | 'plugins'> = {
  presets: [sharedConfig],
  content: [
    './src/**/*.tsx',
    './src/components/**/*.tsx',
    // add new folders that use tailwind
  ],
  plugins: [],
};
export default config;
