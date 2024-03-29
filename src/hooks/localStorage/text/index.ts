export const demoText = `import React, { useState } from 'react';
import { useLocalStorage } from '../useLocalStorage';

export default function LocalStorageDemo() {
  const [name, setName] = useState('');
  const [storageName, setStorageName] = useLocalStorage('name');

  return (
    <div role="container">
      <form>
        <label htmlFor="name">Text your name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      <button onClick={() => setStorageName(name)}>
        Push it in the local storage
      </button>
      <div>Your name in the local storage: {storageName}</div>
    </div>
  );
}`;

export const hookText = `import { useState } from 'react';

type StateArray = [string, (newValue: string) => void];

/**
 * Allows to get and set a value in the local storage
 * @param key - the key of the local storages's item
 * @param initialValue - the initial value of the local storages's item
 * @returns {StateArray} the array of the item's value and method setting a new value to the item
 */
export const useLocalStorage = (
  key: string,
  initialValue?: string,
): StateArray => {
  const storageValue = localStorage.getItem(key) || initialValue || '';
  const [value, setValue] = useState(storageValue);

  const setStorageValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStorageValue];
};`;
