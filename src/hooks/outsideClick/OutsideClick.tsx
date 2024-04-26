import React from 'react';
import OutsideClickDemo from './demo/OutsideClickDemo';
import { CodeBlock } from 'react-code-blocks';
import { api, demoText } from './text';
import ParametersTable from '../../components/shared/parameters/ParametersTable';
import {
  Container,
  DescriptionTitle,
  SourceCodeLink,
  Title,
} from '../../theme/global';
import { codeTheme } from '../../theme/code';
import { pages } from '../../utils/constants/pages';

export default function OutsideClick() {
  const parameters = [
    {
      name: 'callback',
      type: '() => void',
      desc: 'The function that will be called when clicking outside the element.',
    },
  ];
  const returnedValue = [
    {
      name: 'ref',
      type: 'T',
      desc: 'The ref to the element being handled.',
    },
  ];

  return (
    <div>
      <Title>useOutsideClick</Title>
      <Container>
        <DescriptionTitle>DESCRIPTION:</DescriptionTitle>
        <div>
          The useOutsideClick hook can handle the clicks outside the element.
        </div>
      </Container>
      <Container>
        <DescriptionTitle>API:</DescriptionTitle>
        <CodeBlock
          text={api}
          language="javascript"
          theme={codeTheme}
          showLineNumbers={false}
          customStyle={{
            borderRadius: '8px',
            boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
          }}
        />
      </Container>
      <ParametersTable title="PARAMETERS" parameters={parameters} />
      <ParametersTable title="RETURNED VALUE" parameters={returnedValue} />
      <Container>
        <DescriptionTitle>DEMO:</DescriptionTitle>
        <OutsideClickDemo />
      </Container>
      <Container>
        <DescriptionTitle>EXAMPLE:</DescriptionTitle>
        <CodeBlock
          text={demoText}
          language="javascript"
          theme={codeTheme}
          customStyle={{
            height: '400px',
            overflowY: 'scroll',
            marginTop: '16px',
            borderRadius: '8px',
            boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
          }}
        />
      </Container>
      <Container>
        <DescriptionTitle>SOURCE CODE:</DescriptionTitle>
        <SourceCodeLink to={pages.source.useOutsideClick}>
          useOutsideClick on Github
        </SourceCodeLink>
      </Container>
    </div>
  );
}
