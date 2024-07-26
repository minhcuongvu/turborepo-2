import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  id?: string;
  className?: string;
  appName?: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isChecked?: boolean;
  direction?: 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-left-right' | 'right-top-bottom' | 'bottom-left-right' | 'left-top-bottom';
  haveBorder?: boolean;
  disabled?: boolean;
  customStyle?: 'round' | 'rect'
}
