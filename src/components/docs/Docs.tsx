import { Outlet } from 'react-router-dom';
import { DocsContainer, DocsLink, NavContainer } from './Docs.styled';
import { Grid } from '@mui/material';
import { pages } from '../../utils/constants/pages';
import Header from '../header/Header';

export default function Docs() {
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
      paddingRight: 50,
    },
    '@media (min-width: 1200px)': {
      paddingLeft: 50,
      paddingRight: 50,
    },
  };
  return (
    <Grid
      columnSpacing={{ xs: 0, sm: 2, md: 3, lg: 4 }}
      container
      sx={gridStyles}
    >
      <Header />
      <NavContainer>
        <div>
          <DocsLink to={pages.useFetch}>useFetch</DocsLink>
        </div>
        <div>
          <DocsLink to={pages.useLocalStorage}>useLocalStorage</DocsLink>
        </div>
        <div>
          <DocsLink to={pages.useOutsideClick}>useOutsideClick</DocsLink>
        </div>
        <div>
          <DocsLink to={pages.usePagination}>usePagination</DocsLink>
        </div>
        <div>
          <DocsLink to={pages.useToggle}>useToggle</DocsLink>
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
