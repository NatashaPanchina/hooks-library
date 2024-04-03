export const demoText = `import React, { useState } from 'react';
import { useLocalStorage } from '../useLocalStorage';
import styles from './LocalStorageDemo.module.css';

export default function LocalStorageDemo() {
  const [name, setName] = useState('');
  const [storageName, setStorageName] = useLocalStorage('name');

  return (
    <div className={styles.container} role="container">
      <div className={styles.header}>USELOCALSTORAGE</div>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Edit your name:
        </label>
        <div className={styles.flex}>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => setStorageName(name)}
          >
            CHANGE
          </button>
        </div>
      </form>
      <div className={styles.output}>Hello {storageName}!</div>
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

export const api = `type StateArray = [string, (newValue: string) => void];

useLocalStorage(key: string, initialValue?: string): StateArray`;
