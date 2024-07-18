/// <reference types="vite-plugin-svgr/client" />

import {
  Container,
  DescriptionTitle,
  LinkSvg,
  ParametersContainer,
  SourceCodeLink,
  Title,
} from '../../theme/global';
import ToggleDemo from './demo/ToggleDemo';
import LinkIcon from '../../assets/icons/link.svg?react';
import { CodeBlock } from 'react-code-blocks';
import { codeTheme } from '../../theme/code';
import { api, demoText } from './text';
import ParametersTable from '../../components/shared/parameters/ParametersTable';
import { pages } from '../../utils/constants/pages';
import DocNavigation from '../../components/pageNavigation/DocNavigation';

export default function Toggle() {
  const parameters = [
    {
      name: 'value',
      type: 'boolean',
      desc: '(Optional) The initial value of the toggle state.',
    },
  ];
  const returnedValue = [
    {
      name: 'on',
      type: 'boolean',
      desc: 'The current state of the toggle.',
    },
    {
      name: 'toggle',
      type: '() => void',
      desc: 'A function to toggle the state of the toggle.',
    },
    {
      name: 'setTrue',
      type: '() => void',
      desc: 'A function to set the state of the toggle to true.',
    },
    {
      name: 'setFalse',
      type: '() => void',
      desc: 'A function to set the state of the toggle to false.',
    },
  ];
  const scrollPositions = [
    {
      from: 0,
      to: 200,
    },
    {
      from: 200,
      to: 450,
    },
    {
      from: 450,
      to: 610,
    },
    {
      from: 610,
      to: 880,
    },
    {
      from: 880,
      to: 1200,
    },
    {
      from: 1200,
      to: 1350,
    },
    {
      from: 1350,
      to: 1550,
    },
  ];

  return (
    <>
      <div>
        <Title>useToggle</Title>
        <Container id="description">
          <DescriptionTitle>
            DESCRIPTION:{' '}
            <a href="#description">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
          <div>A hook to toggle a boolean value with useToggle.</div>
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
          <ToggleDemo />
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
            SOURCE CODE:
            <a href="#sourceCode">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
          <SourceCodeLink to={pages.source.useToggle}>
            useToggle on Github
          </SourceCodeLink>
        </Container>
      </div>
      <DocNavigation positions={scrollPositions} />
    </>
  );
}
