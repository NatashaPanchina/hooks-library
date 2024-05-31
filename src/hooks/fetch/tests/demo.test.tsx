import { render } from '@testing-library/react';
import FetchDemo from '../demo/FetchDemo';
import { server } from './mocks/server';
import { http, HttpResponse } from 'msw';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should display pokemons info', async () => {
  const { findByText, findByAltText } = render(<FetchDemo />);
  const pokemonNumber = await findByText(/№/i);
  const pokemonPicture = await findByAltText('pokemon-picture');

  expect(pokemonNumber).toHaveTextContent('№ 7');
  expect(pokemonPicture).toHaveAttribute(
    'src',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  );
});

test('should handle errors when fetching the pokemon', async () => {
  server.use(
    http.get('https://pokeapi.co/api/v2/pokemon/7', () => {
      return new HttpResponse(null, { status: 500 });
    }),
  );
  const { findByText } = render(<FetchDemo />);

  const error = await findByText(/Failed/i);
  expect(error).toBeInTheDocument();
});
