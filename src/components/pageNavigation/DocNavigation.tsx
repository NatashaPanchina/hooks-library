import React from 'react';
import {
  AnchorContainer,
  RightNavContainer,
  Title,
} from './DocNavigation.styled';

export default function DocNavigation() {
  return (
    <RightNavContainer>
      <Title>CONTENTS</Title>
      <AnchorContainer>Description</AnchorContainer>
      <AnchorContainer>Api</AnchorContainer>
      <AnchorContainer>Parameters</AnchorContainer>
      <AnchorContainer>Returned value</AnchorContainer>
      <AnchorContainer href="a">Demo</AnchorContainer>
      <AnchorContainer>Example</AnchorContainer>
    </RightNavContainer>
  );
}
