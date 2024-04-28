import React, { useEffect, useState } from 'react';
import {
  AnchorContainer,
  RightNavContainer,
  Title,
} from './DocNavigation.styled';

interface ArrayType {
  from: number;
  to: number;
}
interface PropsTypes {
  positions: Array<ArrayType>;
}

export default function DocNavigation({ positions }: PropsTypes) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <RightNavContainer>
      <Title>CONTENTS</Title>
      <AnchorContainer
        href="#description"
        className={
          scrollPosition >= positions[0].from &&
          scrollPosition < positions[0].to
            ? 'current'
            : ''
        }
      >
        Description
      </AnchorContainer>
      <AnchorContainer
        href="#api"
        className={
          scrollPosition >= positions[1].from &&
          scrollPosition < positions[1].to
            ? 'current'
            : ''
        }
      >
        Api
      </AnchorContainer>
      <AnchorContainer
        href="#parameters"
        className={
          scrollPosition >= positions[2].from &&
          scrollPosition < positions[2].to
            ? 'current'
            : ''
        }
      >
        Parameters
      </AnchorContainer>
      <AnchorContainer
        href="#returnedValue"
        className={
          scrollPosition >= positions[3].from &&
          scrollPosition < positions[3].to
            ? 'current'
            : ''
        }
      >
        Returned value
      </AnchorContainer>
      <AnchorContainer
        href="#demo"
        className={
          scrollPosition >= positions[4].from &&
          scrollPosition < positions[4].to
            ? 'current'
            : ''
        }
      >
        Demo
      </AnchorContainer>
      <AnchorContainer
        href="#example"
        className={
          scrollPosition >= positions[5].from &&
          scrollPosition < positions[5].to
            ? 'current'
            : ''
        }
      >
        Example
      </AnchorContainer>
      <AnchorContainer
        href="#sourceCode"
        className={
          scrollPosition >= positions[6].from &&
          scrollPosition < positions[6].to
            ? 'current'
            : ''
        }
      >
        Source code
      </AnchorContainer>
    </RightNavContainer>
  );
}
