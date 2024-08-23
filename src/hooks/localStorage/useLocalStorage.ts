import { useState } from 'react';

/**
 * The hook allows to get and set a value in the local storage
 *
 * @param key the key of the local storage value
 * @param initialValue the initial value to use if there is no value in the local storage with the provided key.
 * @returns the array of the current local storage value and the function setting the state of the value in the local storage.
 */
export const useLocalStorage = (
  key: string,
  initialValue?: string,
): [string, (newValue: string) => void] => {
  const storageValue = localStorage.getItem(key) || initialValue || '';
  const [value, setValue] = useState(storageValue);

  const setStorageValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStorageValue];
};
