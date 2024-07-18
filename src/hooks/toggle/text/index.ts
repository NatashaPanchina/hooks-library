export const demoText = `import { useToggle } from '../useToggle';

export default function ToggleDemo() {
  const { on, toggle, setTrue, setFalse } = useToggle();

  return (
    <div>
      <div>USETOGGLE</div>
      <div>{on ? '🙈' : '🙉'}</div>
      <div>
        <button onClick={toggle}>
          TOGGLE
        </button>
        <button onClick={setTrue}>
          ON
        </button>
        <button onClick={setFalse}>
          OFF
        </button>
      </div>
    </div>
  );
}`;

export const hookText = `import { useCallback, useState } from 'react';

/**
 * A state toggle hook
 *
 * @param value default value
 * @default false
 * @returns current value and methods updating this value
 */
export const useToggle = (value = false) => {
  const [on, setOn] = useState(value);

  const toggle = useCallback(() => {
    setOn((on) => !on);
  }, []);

  const setTrue = useCallback(() => {
    setOn(true);
  }, []);

  const setFalse = useCallback(() => {
    setOn(false);
  }, []);

  return { on, toggle, setTrue, setFalse };
};`;

export const api = `useToggle(value?: boolean): {
  on: boolean,
  toggle: () => void,
  setTrue: () => void
  setFalse: () => void,  
}`;
