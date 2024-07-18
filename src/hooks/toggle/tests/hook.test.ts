import { act, renderHook } from '@testing-library/react';
import { useToggle } from '../useToggle';

test('should set the initial value and toggle it', () => {
  const { result } = renderHook(() => useToggle());

  expect(result.current.on).toBe(false);

  act(() => result.current.toggle());
  expect(result.current.on).toBe(true);

  act(() => result.current.setFalse());
  expect(result.current.on).toBe(false);

  act(() => result.current.setTrue());
  expect(result.current.on).toBe(true);
});

test('should set the value for toggle', () => {
  const { result } = renderHook(() => useToggle(true));

  expect(result.current.on).toBe(true);
});
