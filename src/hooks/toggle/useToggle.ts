import { useCallback, useState } from 'react';

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
};
