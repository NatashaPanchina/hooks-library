import { http, HttpResponse } from 'msw';
import { pokemonData } from './data';

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/7', () => {
    return HttpResponse.json(pokemonData);
  }),
];
