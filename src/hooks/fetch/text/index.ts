export const api = `useFetch(url: string, options?: { manual: boolean })`;

export const demoText = `import React, { useState } from 'react';
import { useFetch } from '../useFetch';
import styles from './FetchDemo.module.css';
import Pokemon from './pokemon/Pokemon';

export default function FetchDemo() {
  const [pokemon, setPokemon] = useState(7);
  const { data, loading, error } = useFetch(
    \`https://pokeapi.co/api/v2/pokemon/\${pokemon}\`,
  );

  return (
    <div className={styles.container} role="container">
      <div className={styles.header}>USEFETCH</div>
      {error ? (
        <div>Failed</div>
      ) : (
        <>
          <div className={styles.buttons}>
            <div
              className={styles.prev}
              onClick={() =>
                setPokemon((prev) => {
                  if (prev === 1) return prev;
                  return prev - 1;
                })
              }
            >
              Previous
            </div>
            <div
              className={styles.next}
              onClick={() => setPokemon((prev) => prev + 1)}
            >
              Next
            </div>
          </div>
          {loading ? <div>Loading</div> : <Pokemon data={data} />}
        </>
      )}
    </div>
  );
}`;
