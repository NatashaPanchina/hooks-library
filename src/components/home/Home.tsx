import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

export default function Home() {
  const gridStyles = {
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 0,
    paddingBottom: 14,
    '@media (min-width: 600px)': {
      paddingTop: 14,
      paddingLeft: 15,
      paddingRight: 3,
    },
    '@media (min-width: 768px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
  };
  return (
    <>
      <Header />
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 2, md: 3, lg: 4 }}
        sx={gridStyles}
      >
        <Outlet />
      </Grid>
    </>
  );
}
