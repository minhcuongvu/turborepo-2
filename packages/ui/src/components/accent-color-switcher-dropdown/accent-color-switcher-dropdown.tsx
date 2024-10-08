'use client';

import { DotFilledIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import styles from './accent-color-switcher-dropdown.module.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  AccentColor,
  AccentColorSwitcherDropdownProps,
} from '../../interfaces';

export const AccentColorSwitcherDropdown = ({
  data,
  setData,
  items,
}: AccentColorSwitcherDropdownProps) => {
  const handleValueChange = (value: string) => {
    setData(value as AccentColor);
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.DropdownMenuContent}
          sideOffset={5}
        >
          <DropdownMenu.RadioGroup
            value={data}
            onValueChange={handleValueChange}
          >
            {items?.map((item) => (
              <DropdownMenu.RadioItem
                key={item.value}
                className={styles.DropdownMenuRadioItem}
                value={item.value}
              >
                <DropdownMenu.ItemIndicator
                  className={styles.DropdownMenuItemIndicator}
                >
                  <DotFilledIcon />
                </DropdownMenu.ItemIndicator>
                {item.label}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
