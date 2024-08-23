export const api = `useFetch(url: string, options?: { manual: boolean }) => {
  data: any;
  loading: boolean;
  error: string | null;
  run: () => void;
}`;

export const demoText = `import React, { useState } from 'react';
import { useFetch } from '../useFetch';
import Pokemon from './pokemon/Pokemon';

export default function FetchDemo() {
  const [pokemon, setPokemon] = useState(7);
  const { data, loading, error } = useFetch(
    \`https://pokeapi.co/api/v2/pokemon/\${pokemon}\`,
  );

  return (
    <div>
      <div>USEFETCH</div>
      {error ? (
        <div>Failed</div>
      ) : (
        <>
          <div>
            <div onClick={() =>
                setPokemon((prev) => {
                  if (prev === 1) return prev;
                  return prev - 1;
                })
              }
            >
              Previous
            </div>
            <div onClick={() => setPokemon((prev) => prev + 1)}>
              Next
            </div>
          </div>
          {loading ? <div>Loading</div> : <Pokemon data={data} />}
        </>
      )}
    </div>
  );
}`;
