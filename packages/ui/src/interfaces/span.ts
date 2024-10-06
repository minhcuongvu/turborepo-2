import { ReactNode } from "react";
import { CustomStyle } from "./customStyle"
import { BaseContainerProps } from "./BaseContainerProps";

export interface SpanContainerProps extends BaseContainerProps {
  tailwindStyle?: string;
  customStyle?: CustomStyle; 
}

