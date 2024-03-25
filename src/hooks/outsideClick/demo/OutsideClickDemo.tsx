import React, { useState } from 'react';
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
}
