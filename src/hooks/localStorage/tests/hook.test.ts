import { act, renderHook } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

test('should set the initial value for name', () => {
  const { result } = renderHook(() => useLocalStorage('name', 'Anonym'));

  expect(result.current[0]).toBe('Anonym');
});

test('should set the value for name', () => {
  const { result } = renderHook(() => useLocalStorage('name'));

  expect(result.current[0]).toBe('');

  act(() => result.current[1]('Natalia'));
  expect(result.current[0]).toBe('Natalia');
});
