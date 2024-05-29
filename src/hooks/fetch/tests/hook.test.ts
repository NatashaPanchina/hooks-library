import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../useFetch';
import { server } from './mocks/server';
import { pokemonData } from './mocks/data';
import { http, HttpResponse } from 'msw';

test('should set the initial values', () => {
  const { result } = renderHook(() =>
    useFetch(`https://pokeapi.co/api/v2/pokemon/7`),
  );

  expect(result.current.data).toBeNull();
  expect(result.current.error).toBeNull();
  expect(result.current.loading).toBe(true);
});

describe('when data is fetched', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should return the pockemons data', async () => {
    const { result } = renderHook(() =>
      useFetch(`https://pokeapi.co/api/v2/pokemon/7`),
    );

    await waitFor(() => {
      expect(result.current.data).toEqual(pokemonData);
      expect(result.current.error).toBeNull();
      expect(result.current.loading).toBe(false);
    });
  });

  test('should handle errors', async () => {
    server.use(
      http.get('https://pokeapi.co/api/v2/pokemon/7', () => {
        return new HttpResponse('Fetching Error', { status: 500 });
      }),
    );
    const { result } = renderHook(() =>
      useFetch(`https://pokeapi.co/api/v2/pokemon/7`),
    );

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.error).toBe('Fetching Error');
      expect(result.current.loading).toBe(false);
    });
  });
});
