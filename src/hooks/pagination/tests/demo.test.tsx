import { fireEvent, render } from '@testing-library/react';
import PaginationDemo from '../demo/PaginationDemo';

test('usePagination', () => {
  const { getAllByRole, getByTestId } = render(<PaginationDemo />);

  const fiveButton = getByTestId('5');
  const tenButton = getByTestId('10');

  expect(getAllByRole('img').length).toBe(7);

  fireEvent.click(fiveButton);
  expect(getAllByRole('img').length).toBe(5);

  fireEvent.click(tenButton);
  expect(getAllByRole('img').length).toBe(10);
});
