import React from 'react';
import { Outlet } from 'react-router-dom';
import { DocsContainer, DocsLink, NavContainer } from './Docs.styled';
import { Grid } from '@mui/material';
import { pages } from '../../utils/constants/pages';

export default function Docs() {
  const gridStyles = {
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 0,
    paddingBottom: 14,
    '@media (min-width: 600px)': {
      paddingTop: 14,
      paddingLeft: 15,
    },
    '@media (min-width: 768px)': {
      paddingLeft: 20,
    },
    '@media (min-width: 900px)': {
      paddingLeft: 45,
    },
  };
  return (
    <Grid container sx={gridStyles}>
      <NavContainer>
        <div>
          <DocsLink to={pages.useOutsideClick}>useOutsideClick</DocsLink>
        </div>
        <div>
          <DocsLink to={pages.useLocalStorage}>useLocalStorage</DocsLink>
        </div>
      </NavContainer>
      <Grid item xs={12}>
        <DocsContainer>
          <Outlet />
        </DocsContainer>
      </Grid>
    </Grid>
  );
}
