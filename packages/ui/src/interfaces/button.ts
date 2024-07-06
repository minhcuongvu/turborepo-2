import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
