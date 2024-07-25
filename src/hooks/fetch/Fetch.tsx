/// <reference types="vite-plugin-svgr/client" />

import {
  Container,
  DescriptionTitle,
  LinkSvg,
  ParametersContainer,
  SourceCodeLink,
  Title,
} from '../../theme/global';
import FetchDemo from './demo/FetchDemo';
import LinkIcon from '../../assets/icons/link.svg?react';
import { CodeBlock } from 'react-code-blocks';
import { codeTheme } from '../../theme/code';
import { api, demoText } from './text';
import ParametersTable from '../../components/shared/parameters/ParametersTable';
import { pages } from '../../utils/constants/pages';
import DocNavigation from '../../components/pageNavigation/DocNavigation';

export default function Fetch() {
  const parameters = [
    {
      name: 'url',
      type: 'string',
      desc: 'The URL to fetch data from.',
    },
    {
      name: 'options',
      type: 'object',
      desc: 'Additional options for the fetch request. If options.manual = true is set, useFetch will not be executed by default, and the execution needs to be triggered by run.',
    },
  ];
  const returnedValue = [
    {
      name: 'state',
      type: 'object',
      desc: 'The state object containing the fetched data and fetching status.',
    },
    {
      name: 'state.data',
      type: 'any | null',
      desc: 'The fetched data if the fetch was successful, otherwise null.',
    },
    {
      name: 'state.loading',
      type: 'boolean',
      desc: 'The fetching loading status.',
    },
    {
      name: 'state.error',
      type: 'string | null',
      desc: 'The error message if an error occurred during the fetch, otherwise null.',
    },
    {
      name: 'state.run',
      type: '() => void',
      desc: 'The run method triggers a fetch execution.',
    },
  ];
  const scrollPositions = [
    {
      from: 0,
      to: 210,
    },
    {
      from: 210,
      to: 330,
    },
    {
      from: 330,
      to: 550,
    },
    {
      from: 550,
      to: 900,
    },
    {
      from: 900,
      to: 1550,
    },
    {
      from: 1550,
      to: 1700,
    },
    {
      from: 1700,
      to: 1900,
    },
  ];

  return (
    <>
      <div>
        <Title>useFetch</Title>
        <Container id="description">
          <DescriptionTitle>
            DESCRIPTION:{' '}
            <a href="#description">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
          <div>
            The useFetch hook allows you to easily fetch data from a specified
            URL using the fetch API and provides a consistent pattern for
            handling loading, success, and error states. The fetching data which
            will be automatically triggered when the component is first loaded.
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
          <FetchDemo />
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
          <SourceCodeLink to={pages.source.useFetch}>
            useFetch on Github
          </SourceCodeLink>
        </Container>
      </div>
      <DocNavigation positions={scrollPositions} />
    </>
  );
}
