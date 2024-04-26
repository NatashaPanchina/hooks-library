import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

export default function Home() {
  const gridStyles = {
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 10,
    paddingBottom: 14,
    '@media (min-width: 600px)': {
      paddingTop: 14,
      paddingLeft: 3,
      paddingRight: 3,
    },
    '@media (min-width: 768px)': {
      paddingLeft: 10,
      paddingRight: 10,
    },
    '@media (min-width: 900px)': {
      paddingRight: 50,
    },
    '@media (min-width: 1200px)': {
      paddingLeft: 20,
      paddingRight: 50,
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
