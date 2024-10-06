import { ReactNode } from "react";

export interface DivContainerProps {
  children?: ReactNode;
  tailwindStyle?: string;
  customStyle?: CustomStyle; 
  onClick?: () => void;
}

export interface CustomStyle {
  div1?: string;
}

