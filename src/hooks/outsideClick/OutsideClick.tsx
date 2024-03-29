import React from 'react';
import OutsideClickDemo from './demo/OutsideClickDemo';
import { CodeBlock, zenburn } from 'react-code-blocks';
import { demoText } from './text';
import { styled } from '@mui/system';

const Title = styled('div')(({ theme }) => ({
  color: theme.text,
}));

export default function OutsideClick() {
  return (
    <div>
      <div>useOutsideClick</div>
      <div>
        <OutsideClickDemo />
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
