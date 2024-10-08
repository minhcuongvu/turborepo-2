'use client';

import { BlendingModeIcon, ColorWheelIcon, DotFilledIcon, HamburgerMenuIcon, SunIcon } from '@radix-ui/react-icons';
import { Button, IconButton } from '@radix-ui/themes';
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
  theme,
}: AccentColorSwitcherDropdownProps) => {
  const handleValueChange = (value: string) => {
    setData(value as AccentColor);
  };
  const controlBtnClass = ['cursor-pointer', styles.ControlBtn]
    .join(' ')
    .trim();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton
          variant="ghost"
          className={controlBtnClass}
          type="button"
          size='3'
        >
          <BlendingModeIcon className={styles.ControlBtnIcon} width="20" height="20" />
        </IconButton>
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
