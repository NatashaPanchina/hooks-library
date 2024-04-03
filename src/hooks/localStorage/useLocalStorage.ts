import { useState } from 'react';

type StateArray = [string, (newValue: string) => void];

/**
 * Allows to get and set a value in the local storage
 * @param key - the key of the local storage value
 * @param initialValue - the initial value to use if there is no value in the local storage with the provided key.
 * @returns {StateArray} the array of the current local storage value and the function setting the state of the value in the local storage.
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
};
