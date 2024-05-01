import React from 'react';
import LocalStorageDemo from './demo/LocalStorageDemo';
import { CodeBlock } from 'react-code-blocks';
import { api, demoText } from './text';
import {
  Container,
  DescriptionTitle,
  LinkSvg,
  ParametersContainer,
  SourceCodeLink,
  Title,
} from '../../theme/global';
import { codeTheme } from '../../theme/code';
import ParametersTable from '../../components/shared/parameters/ParametersTable';
import { pages } from '../../utils/constants/pages';
import DocNavigation from '../../components/pageNavigation/DocNavigation';
import { ReactComponent as LinkIcon } from '../../assets/icons/link.svg';

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
  const scrollPositions = [
    {
      from: 0,
      to: 220,
    },
    {
      from: 220,
      to: 400,
    },
    {
      from: 400,
      to: 600,
    },
    {
      from: 600,
      to: 800,
    },
    {
      from: 800,
      to: 1000,
    },
    {
      from: 1000,
      to: 1200,
    },
    {
      from: 1200,
      to: 1300,
    },
  ];

  return (
    <>
      <div>
        <Title>useLocalStorage</Title>
        <Container id="description">
          <DescriptionTitle>
            DESCRIPTION:
            <a href="#description">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
          <div>
            The useLocalStorage hook is an easy way to synchronize the state of
            a component with the data stored in local storage. It automatically
            reads the initial value from local storage when the component mounts
            and updates the local storage whenever the state changes.
          </div>
        </Container>
        <Container id="api">
          <DescriptionTitle>
            API:{' '}
            <a href="#api">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
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
        <ParametersContainer id="parameters">
          <ParametersTable
            title="PARAMETERS"
            parameters={parameters}
            link="#parameters"
          />
        </ParametersContainer>
        <ParametersContainer id="returnedValue">
          <ParametersTable
            title="RETURNED VALUE"
            parameters={returnedValue}
            link="#returnedValue"
          />
        </ParametersContainer>
        <Container id="demo">
          <DescriptionTitle>
            DEMO:{' '}
            <a href="#demo">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
          <LocalStorageDemo />
        </Container>
        <Container id="example">
          <DescriptionTitle>
            EXAMPLE:
            <a href="#example">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
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
        <Container id="sourceCode">
          <DescriptionTitle>
            SOURCE CODE:{' '}
            <a href="#sourceCode">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
          <SourceCodeLink to={pages.source.useLocalStorage}>
            useLocalStorage on Github
          </SourceCodeLink>
        </Container>
      </div>
      <DocNavigation positions={scrollPositions} />
    </>
  );
}
