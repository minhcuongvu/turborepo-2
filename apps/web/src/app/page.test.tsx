/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from './page';

it('Check for content inside a code block', () => {
  render(<Home />);
  const element = screen.getByTestId('testid-322');
  expect(element).not.toBeNull();
  expect(element?.textContent).toContain('Hello');
});
