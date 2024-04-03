import React from 'react';
import LocalStorageDemo from './demo/LocalStorageDemo';
import { CodeBlock } from 'react-code-blocks';
import { api, demoText } from './text';
import { Container, DescriptionTitle, Title } from '../../theme/global';
import { codeTheme } from '../../theme/code';
import ParametersTable from '../../components/shared/parameters/ParametersTable';

export default function LocalStorage() {
  const parameters = [
    {
      name: 'key',
      type: 'string',
      desc: 'The key of the local storage value.',
    },
    {
      name: 'initialValue',
      type: 'string',
      desc: 'The initial value to use if there is no value in the local storage with the provided key.',
    },
  ];
  const returnedValue = [
    {
      name: 'value',
      type: 'string',
      desc: 'The current state of the value stored in the local storage.',
    },
    {
      name: 'setStorageValue',
      type: '(newValue: string) => void',
      desc: 'A function to set the state of the value in the local storage.',
    },
  ];

  return (
    <div>
      <Title>useLocalStorage</Title>
      <Container>
        <DescriptionTitle>DESCRIPTION:</DescriptionTitle>
        <div>
          The useLocalStorage hook is an easy way to synchronize the state of a
          component with the data stored in local storage. It automatically
          reads the initial value from local storage when the component mounts
          and updates the local storage whenever the state changes.
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
        <LocalStorageDemo />
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
    </div>
  );
}
