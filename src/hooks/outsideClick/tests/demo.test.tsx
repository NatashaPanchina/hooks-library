import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import OutsideClickDemo from '../demo/OutsideClickDemo';
import '@testing-library/jest-dom/extend-expect'



test('useOutsideClick', () => {
  const { getByText, getByRole } = render(<OutsideClickDemo />);
  const button = getByText(/Click outside me!/i);
  const countDisplay = getByText(/Clicks count:/i);
  const container = getByRole(/container/i);

  expect(countDisplay).toHaveTextContent('Clicks count: 0');

  fireEvent.click(button);
  expect(countDisplay).toHaveTextContent('Clicks count: 0');

  fireEvent.click(container);
  expect(countDisplay).toHaveTextContent('Clicks count: 1');

  fireEvent.click(countDisplay);
  expect(countDisplay).toHaveTextContent('Clicks count: 2');
});
