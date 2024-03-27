import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import LocalStorageDemo from '../demo/LocalStorageDemo';

test('useLocalStorage', () => {
  const { getByText, getByLabelText } = render(<LocalStorageDemo />);
  const button = getByText(/Push/i);
  const input = getByLabelText(/Text your name/i);
  const output = getByText(/Your name in the local storage/i);

  expect(output).toHaveTextContent('Your name in the local storage:');

  fireEvent.change(input, { target: { value: 'Natalia' } });
  fireEvent.click(button);
  expect(output).toHaveTextContent('Your name in the local storage: Natalia');
});
