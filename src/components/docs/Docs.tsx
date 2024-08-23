import { Outlet } from 'react-router-dom';
import { DocsContainer, DocsLink, NavContainer } from './Docs.styled';
import { Grid } from '@mui/material';
import Header from '../header/Header';
import { hooks } from '../../utils/constants/hooks';

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
        {hooks.map((hook) => (
          <div key={hook.name}>
            <DocsLink to={hook.route}>{hook.name}</DocsLink>
          </div>
        ))}
      </NavContainer>
      <Grid item xs={12}>
        <DocsContainer>
          <Outlet />
        </DocsContainer>
      </Grid>
    </Grid>
  );
}
