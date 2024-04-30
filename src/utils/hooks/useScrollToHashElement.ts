import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;

    const removeHashCharacter = (str: string) => {
      return str.slice(1);
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [location]);
};
