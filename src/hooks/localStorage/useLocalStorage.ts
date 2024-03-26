import { useState } from 'react';

type StateArray = [string, (newValue: string) => void];

/**
 * Allows to get and set a value in the local storage
 * @param key - the key of the local storages's item
 * @param initialValue - the initial value of the local storages's item
 * @returns {StateArray} the array of the item's value and method setting a new value to item
 */
export const useLocalStorage = (
  key: string,
  initialValue?: string,
): StateArray => {
  const storageValue: string = localStorage.getItem(key) || initialValue || '';
  const [value, setValue] = useState<string>(storageValue);

  const setStorageValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStorageValue];
};
