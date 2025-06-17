export type Theme = {
  Light: string;
  Dark: string;
};

export type ThemeColor = 'light' | 'dark';

export type ThemeDefaults = {
  //theme: ThemeColor;
  accentColor: AccentColor;
};

export type AccentColor =
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

export const AccentColorOptions: { value: AccentColor; label: string }[] = [
  { value: 'gray', label: 'Gray' },
  { value: 'gold', label: 'Gold' },
  { value: 'bronze', label: 'Bronze' },
  { value: 'brown', label: 'Brown' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'amber', label: 'Amber' },
  { value: 'orange', label: 'Orange' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'red', label: 'Red' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'crimson', label: 'Crimson' },
  { value: 'pink', label: 'Pink' },
  { value: 'plum', label: 'Plum' },
  { value: 'purple', label: 'Purple' },
  { value: 'violet', label: 'Violet' },
  { value: 'iris', label: 'Iris' },
  { value: 'indigo', label: 'Indigo' },
  { value: 'blue', label: 'Blue' },
  { value: 'cyan', label: 'Cyan' },
  { value: 'teal', label: 'Teal' },
  { value: 'jade', label: 'Jade' },
  { value: 'green', label: 'Green' },
  { value: 'grass', label: 'Grass' },
  { value: 'lime', label: 'Lime' },
  { value: 'mint', label: 'Mint' },
  { value: 'sky', label: 'Sky' },
];
