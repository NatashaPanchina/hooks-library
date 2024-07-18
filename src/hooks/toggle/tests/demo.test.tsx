import { fireEvent, render } from '@testing-library/react';
import ToggleDemo from '../demo/ToggleDemo';

test('useToggle', () => {
  const { getByText, getByRole } = render(<ToggleDemo />);

  const toggleButton = getByText('TOGGLE');
  const onButton = getByText(/ON/i);
  const offButton = getByText(/OFF/i);
  const emoji = getByRole('emoji');

  expect(emoji).toHaveTextContent('🙉');

  fireEvent.click(toggleButton);
  expect(emoji).toHaveTextContent('🙈');

  fireEvent.click(onButton);
  expect(emoji).toHaveTextContent('🙈');

  fireEvent.click(offButton);
  expect(emoji).toHaveTextContent('🙉');
});
