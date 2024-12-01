/**
 * @jest-environment jsdom
 */
import { Hello } from '@repo/ui/components';
import { render, screen } from '@testing-library/react';

it('Check for async/serverside content inside a code block', async () => {
  const hello = Hello();
  render(hello);
  const element = screen.getByTestId('testid-322');
  expect(element).not.toBeNull();
  expect(element?.textContent).toContain('Hello');
});
