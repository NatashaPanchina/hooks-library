import React, { useState } from 'react';
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
}
