import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  id?: string;
  className?: string;
  appName?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isChecked?: boolean;
}
