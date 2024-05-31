/// <reference types="vite-plugin-svgr/client" />

import OutsideClickDemo from './demo/OutsideClickDemo';
import { CodeBlock } from 'react-code-blocks';
import { api, demoText } from './text';
import ParametersTable from '../../components/shared/parameters/ParametersTable';
import {
  Container,
  DescriptionTitle,
  LinkSvg,
  ParametersContainer,
  SourceCodeLink,
  Title,
} from '../../theme/global';
import { codeTheme } from '../../theme/code';
import { pages } from '../../utils/constants/pages';
import DocNavigation from '../../components/pageNavigation/DocNavigation';
import LinkIcon from '../../assets/icons/link.svg?react';

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
  const scrollPositions = [
    {
      from: 0,
      to: 200,
    },
    {
      from: 200,
      to: 300,
    },
    {
      from: 300,
      to: 490,
    },
    {
      from: 490,
      to: 600,
    },
    {
      from: 600,
      to: 800,
    },
    {
      from: 800,
      to: 950,
    },
    {
      from: 950,
      to: 1000,
    },
  ];

  return (
    <>
      <div>
        <Title>useOutsideClick</Title>
        <Container id="description">
          <DescriptionTitle>
            DESCRIPTION:{' '}
            <a href="#description">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
          <div>
            The useOutsideClick hook can handle the clicks outside the element.
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
          <OutsideClickDemo />
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
          <SourceCodeLink to={pages.source.useOutsideClick}>
            useOutsideClick on Github
          </SourceCodeLink>
        </Container>
      </div>
      <DocNavigation positions={scrollPositions} />
    </>
  );
}
