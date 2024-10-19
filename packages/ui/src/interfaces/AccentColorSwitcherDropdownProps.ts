import { AccentColor } from './customStyle';

export interface AccentColorSwitcherDropdownProps {
  data: AccentColor;
  setData: (value: AccentColor) => void;
  children?: React.ReactNode;
  items: { value: AccentColor; label: string }[];
  theme: string;
}
