import { act, renderHook } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

test('should set the initial value for name', () => {
  const { result } = renderHook(() => useLocalStorage('name'));
  const [name, setStorageName] = result.current;

  expect(name).toBe('');

  act(() => setStorageName('Natalia'));
  expect(name).toBe('Natalia');
});
