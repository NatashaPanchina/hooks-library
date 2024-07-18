import { useToggle } from '../useToggle';
import styles from './ToggleDemo.module.css';

export default function ToggleDemo() {
  const { on, toggle, setTrue, setFalse } = useToggle();

  return (
    <div className={styles.container} role="container">
      <div className={styles.header}>USETOGGLE</div>
      <div className={styles.emoji} role="emoji">
        {on ? '🙈' : '🙉'}
      </div>
      <div className={styles.buttons}>
        <button className={styles.toggle} onClick={toggle}>
          TOGGLE
        </button>
        <button className={styles.toggle} onClick={setTrue}>
          ON
        </button>
        <button className={styles.toggle} onClick={setFalse}>
          OFF
        </button>
      </div>
    </div>
  );
}
