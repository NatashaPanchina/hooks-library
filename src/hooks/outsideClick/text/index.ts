export const demoText = `import React, { useState } from 'react';
import { useOutsideClick } from '../useOutsideClick';

export default function OutsideClickDemo() {
  const [count, setCount] = useState<number>(0);
  const callback = () => setCount((prevCount) => prevCount + 1);
  const ref = useOutsideClick<HTMLButtonElement>(callback);

  return (
    <div role="container">
      <button ref={ref}>Click outside me!</button>
      <div>Clicks count: {count}</div>
    </div>
  );
}`;

export const hookText = `import { useRef, useEffect, RefObject } from 'react';

/**
 * Handles clicks outside the element
 * @param callback - The function that will be called when clicking outside the element
 * @returns {RefObject<T>} the ref to the element being handled
 */
export const useOutsideClick = <T extends HTMLElement>(
  callback: () => void,
): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      } else {
        event.stopPropagation();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};`;
