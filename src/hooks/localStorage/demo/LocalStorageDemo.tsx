import { useState } from 'react';
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
}
