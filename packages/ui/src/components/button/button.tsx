'use client';

import styles from './button.module.css';
import { ButtonProps } from '@repo/ui/interfaces';
import { Button as RadixButton } from '@radix-ui/themes';

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <RadixButton {...rest}>{children}</RadixButton>;
};
