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

interface ParameterType {
  name: string;
  type: string;
  desc: string;
}

interface PropsTypes {
  title: string;
  parameters: Array<ParameterType>;
}

export default function ParametersTable({ title, parameters }: PropsTypes) {
  return (
    <Container>
      <DescriptionTitle>{title}</DescriptionTitle>
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
