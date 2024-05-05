import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import LocalStorageDemo from '../demo/LocalStorageDemo';

test('useLocalStorage', () => {
  const { getByText, getByLabelText } = render(<LocalStorageDemo />);
  const button = getByText(/Change/i);
  const input = getByLabelText(/Edit your name/i);
  const output = getByText(/Hello/i);

  expect(output).toHaveTextContent('Hello !');

  fireEvent.change(input, { target: { value: 'Natalia' } });
  fireEvent.click(button);
  expect(output).toHaveTextContent('Hello Natalia!');
});
