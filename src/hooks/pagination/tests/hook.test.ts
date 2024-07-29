import { act, renderHook } from '@testing-library/react';
import { usePagination } from '../usePagination';
import { pokemons } from '../utils/data';
import {
  defaultPokemons,
  fifthPage,
  fivePokemons,
  secondPage,
} from './mocks/data';

test('should set the initial values and switching pages', () => {
  const { result } = renderHook(() => usePagination(pokemons));

  expect(result.current.currentPage).toBe(1);
  expect(result.current.pageSize).toBe(10);
  expect(result.current.totalPages).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(result.current.result).toEqual(defaultPokemons);

  act(() => result.current.changeCurrentPage());
  expect(result.current.currentPage).toBe(2);
  expect(result.current.result).toEqual(secondPage);

  act(() => result.current.changeCurrentPage(5));
  expect(result.current.currentPage).toBe(5);
  expect(result.current.result).toEqual(fifthPage);

  act(() => result.current.changePageSize(5));
  expect(result.current.pageSize).toBe(5);

  act(() => result.current.onChange(1, 5));
  expect(result.current.currentPage).toBe(1);
  expect(result.current.result).toEqual(fivePokemons);
});
