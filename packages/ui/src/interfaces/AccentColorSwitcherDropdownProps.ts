type AccentColor =
| 'gray'
| 'gold'
| 'bronze'
| 'brown'
| 'yellow'
| 'amber'
| 'orange'
| 'tomato'
| 'red'
| 'ruby'
| 'crimson'
| 'pink'
| 'plum'
| 'purple'
| 'violet'
| 'iris'
| 'indigo'
| 'blue'
| 'cyan'
| 'teal'
| 'jade'
| 'green'
| 'grass'
| 'lime'
| 'mint'
| 'sky';

export interface Item {
  value: string;
  label: string;
}
export interface AccentColorSwitcherDropdownProps {
  data: string;
  setData: (value: AccentColor) => void;
  children?: React.ReactNode;
  items: { value: AccentColor; label: string }[];
}
