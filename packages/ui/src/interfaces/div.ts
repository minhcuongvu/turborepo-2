import { ReactNode } from 'react';
import { CustomStyle } from './customStyle';
import { BaseContainerProps } from './BaseContainerProps';

export interface DivContainerProps extends BaseContainerProps {
  tailwindStyle?: string;
  customStyle?: CustomStyle;
}
