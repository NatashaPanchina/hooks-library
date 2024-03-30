import React, { HTMLAttributes } from 'react';
import OutsideClickDemo from './demo/OutsideClickDemo';
import { CodeBlock, zenburn } from 'react-code-blocks';
import { demoText } from './text';
import { styled } from '@mui/system';
import { ThemeProps } from '../../theme';

const Title = styled((props: ThemeProps & HTMLAttributes<HTMLDivElement>) => (
  <div {...props} />
))(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: theme.colors.green.bright,
}));

export default function OutsideClick() {
  return (
    <div>
      <Title>useOutsideClick</Title>
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
