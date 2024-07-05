/**
 * @jest-environment jsdom
 */
import { Hello } from '@repo/ui/components';
import { render, screen } from '@testing-library/react';

// do not test Home, just test its children where they do not have their own async inside

it('Check for async/serverside content inside a code block', async () => {
  const hello = await Hello();
  render(hello);
  const element = screen.getByTestId('testid-322');
  expect(element).not.toBeNull();
  expect(element?.textContent).toContain('Hello');
});
