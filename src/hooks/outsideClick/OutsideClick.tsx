import React, { HTMLAttributes } from 'react';
import OutsideClickDemo from './demo/OutsideClickDemo';
import { CodeBlock, zenburn } from 'react-code-blocks';
import { demoText } from './text';
import { styled } from '@mui/system';
import { Theme } from '@mui/material';

interface CustomTheme extends Theme {
  colors: {
    grey: {
      500: string;
    };
  };
}

interface ThemeProps {
  theme?: CustomTheme
}

const Title = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />
)(({ theme }) => ({
  color: theme.colors.grey[500],
}));

export default function OutsideClick() {
  return (
    <div>
      <Title>OutsideClick</Title>
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
