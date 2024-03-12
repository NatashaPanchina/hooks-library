import { useRef, useEffect, RefObject } from 'react';

/**
 * Handles clicks outside the element
 * @param callback - The function that will be called when clicking outside the element
 * @returns {RefObject<HTMLElement>} the ref to the html element being handled
 */
export const useOutsideClick = (
  callback: () => void,
): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);

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
};
