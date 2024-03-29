import React from 'react';
import LocalStorageDemo from './demo/LocalStorageDemo';
import { CodeBlock, zenburn } from 'react-code-blocks';
import { demoText } from './text';

export default function LocalStorage() {
  return (
    <div>
      <div>useOutsideClick</div>
      <div>
        <LocalStorageDemo />
      </div>
      <CodeBlock
        text={demoText}
        language="javascript"
        theme={zenburn}
        customStyle={{
          height: '350px',
          overflowY: 'scroll',
          margin: '20px',
          borderRadius: '5px',
          boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
        }}
      />
    </div>
  );
}
