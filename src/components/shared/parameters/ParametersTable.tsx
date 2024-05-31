/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import {
  Container,
  DescriptionTitle,
  HeaderGrid,
  Hr,
  InfoGrid,
  Name,
  Type,
  ValuesTable,
} from './ParametersTable.styled';
import { LinkSvg } from '../../../theme/global';
import LinkIcon from '../../../assets/icons/link.svg?react';

interface ParameterType {
  name: string;
  type: string;
  desc: string;
}

interface PropsTypes {
  title: string;
  parameters: Array<ParameterType>;
  link: string;
}

export default function ParametersTable({
  title,
  parameters,
  link,
}: PropsTypes) {
  return (
    <Container>
      <DescriptionTitle>
        {title}{' '}
        <a href={link}>
          <LinkSvg as={LinkIcon} />
        </a>
      </DescriptionTitle>
      <ValuesTable>
        <HeaderGrid>
          <div>Name</div>
          <div>Type</div>
          <div>Description</div>
        </HeaderGrid>
        {parameters.map((value, index) => (
          <React.Fragment key={index}>
            <InfoGrid>
              <Name>{value.name}</Name>
              <Type>{value.type}</Type>
              <div>{value.desc}</div>
            </InfoGrid>
            {index === parameters.length - 1 ? null : <Hr />}
          </React.Fragment>
        ))}
      </ValuesTable>
    </Container>
  );
}
