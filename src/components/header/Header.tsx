import React from 'react';
import {
  Container,
  DocsLink,
  HomeLink,
  HomeLinkDesc,
  Svg,
  SvgContainer,
  SvgLink,
} from './Header.styled';
import { pages } from '../../utils/constants/pages';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logoIcon.svg';

export default function Header() {
  return (
    <Container>
      <HomeLink to={pages.home}>
        <SvgContainer>
          <Svg as={LogoIcon} />
        </SvgContainer>
        <HomeLinkDesc>re-Hooks</HomeLinkDesc>
      </HomeLink>
      <DocsLink to={pages.useOutsideClick}>Docs</DocsLink>
      <SvgLink to={pages.github}>
        <Svg as={GithubIcon} />
      </SvgLink>
    </Container>
  );
}
