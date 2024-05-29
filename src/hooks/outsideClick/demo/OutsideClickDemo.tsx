import { useState } from 'react';
import { useOutsideClick } from '../useOutsideClick';
import styles from './OutsideClickDemo.module.css';

export default function OutsideClickDemo() {
  const [count, setCount] = useState(0);
  const callback = () => setCount((prevCount) => prevCount + 1);
  const ref = useOutsideClick<HTMLButtonElement>(callback);

  return (
    <div className={styles.container} role="container">
      <div className={styles.header}>USEOUTSIDECLICK</div>
      <button className={styles.button} ref={ref}>
        CLICK OUTSIDE ME!
      </button>
      <div className={styles.counter}>Clicks count: {count}</div>
    </div>
  );
}
