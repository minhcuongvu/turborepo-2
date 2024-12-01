'use client';

import { useAppSelector } from '@/lib/hooks';
import { SunIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';
import React from 'react';

function TestRedux() {
  const { theme } = useAppSelector((state) => state.theme);
  const LogAccentColor = () => {
    console.log(theme);
  };
  return (
    <Flex>
      <IconButton
        className="cursor-pointer text-black dark:text-white"
        type="button"
        onClick={LogAccentColor}
        variant="ghost"
        size="3"
      >
        <SunIcon width="20" height="20" />
      </IconButton>
    </Flex>
  );
}

export default TestRedux;
