/// <reference types="vite-plugin-svgr/client" />
import { Grid } from '@mui/material';
import {
  AboutContainer,
  Container,
  DocsLink,
  InstallContainer,
  LogoContainer,
  LogoSvg,
} from './About.styled';
import Header from '../header/Header';
import Logo from '../../assets/icons/re-Hooks.svg?react';
import HooksList from './hooksList/HooksList';
import MainContent from './mainContent/MainContent';
import Footer from './footer/Footer';
import { pages } from '../../utils/constants/pages';

export default function About() {
  const gridStyles = {
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 16,
    paddingBottom: 14,
    '@media (min-width: 600px)': {
      paddingTop: 18,
      paddingLeft: 3,
      paddingRight: 3,
    },
    '@media (min-width: 768px)': {
      paddingLeft: 4,
      paddingRight: 4,
    },
    '@media (min-width: 900px)': {
      paddingLeft: 10,
      paddingRight: 10,
    },
    '@media (min-width: 1200px)': {
      paddingLeft: 30,
      paddingRight: 30,
    },
  };

  return (
    <Grid
      container
      columnSpacing={{ xs: 0, sm: 2, md: 3, lg: 4 }}
      sx={gridStyles}
    >
      <Header />
      <Grid item xs={12}>
        <Container>
          <div>
            <LogoContainer>
              <LogoSvg as={Logo} />
            </LogoContainer>
            <AboutContainer>
              A modern & reliable React hooks library
            </AboutContainer>
            <InstallContainer>npm install re-hooks (Soon)</InstallContainer>
          </div>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <HooksList />
      </Grid>
      <Grid item xs={12}>
        <DocsLink to={pages.useFetch}>Go to the docs</DocsLink>
        <MainContent />
      </Grid>
      <Footer />
    </Grid>
  );
}
