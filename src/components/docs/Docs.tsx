import { Outlet } from 'react-router-dom';
import { DocsContainer, DocsLink, NavContainer } from './Docs.styled';
import { Grid } from '@mui/material';
import { pages } from '../../utils/constants/pages';

export default function Docs() {
  const gridStyles = {
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 9,
    paddingBottom: 14,
    '@media (min-width: 1200px)': {
      paddingLeft: 40,
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
        <div>
          <DocsLink to={pages.useFetch}>useFetch</DocsLink>
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
