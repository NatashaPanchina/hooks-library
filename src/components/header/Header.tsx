import React from 'react';
import { Container, DocsLink, HomeLink } from './Header.styled';
import { pages } from '../../utils/constants/pages';

export default function Header() {
  return (
    <Container>
      <HomeLink to={pages.home}>Re-hooks</HomeLink>
      <DocsLink to={pages.useOutsideClick}>Docs</DocsLink>
    </Container>
  );
}
