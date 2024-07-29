/// <reference types="vite-plugin-svgr/client" />

import {
  Container,
  DescriptionTitle,
  LinkSvg,
  ParametersContainer,
  SourceCodeLink,
  Title,
} from '../../theme/global';
import PaginationDemo from './demo/PaginationDemo';
import LinkIcon from '../../assets/icons/link.svg?react';
import ParametersTable from '../../components/shared/parameters/ParametersTable';
import { CodeBlock } from 'react-code-blocks';
import { codeTheme } from '../../theme/code';
import { api, demoText } from './text';
import { pages } from '../../utils/constants/pages';
import DocNavigation from '../../components/pageNavigation/DocNavigation';

export default function Pagination() {
  const parameters = [
    {
      name: 'list',
      type: 'any[]',
      desc: 'The paging data.',
    },
    {
      name: 'options',
      type: 'object',
      desc: 'The additional options for the pagination.',
    },
    {
      name: 'options.pageSize',
      type: 'number[]',
      desc: 'Number of elements to display for each page.',
    },
    {
      name: 'options.defaultPage',
      type: 'number',
      desc: 'The initial page.',
    },
  ];
  const returnedValue = [
    {
      name: 'result',
      type: 'any[]',
      desc: 'The data of current page.',
    },
    {
      name: 'totalPages',
      type: 'number[]',
      desc: 'The list of total pages.',
    },
    {
      name: 'currentPage',
      type: 'number',
      desc: 'The number of current page.',
    },
    {
      name: 'pageSize',
      type: 'number',
      desc: 'The page size information.',
    },
    {
      name: 'onChange',
      type: '(current: number, pageSize: number) => void',
      desc: 'The method for switching pages and changing current page.',
    },
    {
      name: 'changeCurrentPage',
      type: '(page?: number) => void',
      desc: 'The method for switching pages.',
    },
    {
      name: 'changePageSize',
      type: '(size: number) => void',
      desc: 'The method for changing current page.',
    },
  ];

  const scrollPositions = [
    {
      from: 0,
      to: 210,
    },
    {
      from: 210,
      to: 650,
    },
    {
      from: 650,
      to: 950,
    },
    {
      from: 950,
      to: 1380,
    },
    {
      from: 1380,
      to: 2090,
    },
    {
      from: 2090,
      to: 2200,
    },
    {
      from: 2200,
      to: 2500,
    },
  ];

  return (
    <>
      <div>
        <Title>usePagination</Title>
        <Container id="description">
          <DescriptionTitle>
            DESCRIPTION:{' '}
            <a href="#description">
              <LinkSvg as={LinkIcon} />
            </a>
          </DescriptionTitle>
          <div>
            The usePagination hook encapsulates common paging logic. It's
            commonly used for breaking big data into the pages.
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
          <PaginationDemo />
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
          <SourceCodeLink to={pages.source.usePagination}>
            usePagination on Github
          </SourceCodeLink>
        </Container>
      </div>
      <DocNavigation positions={scrollPositions} />
    </>
  );
}
