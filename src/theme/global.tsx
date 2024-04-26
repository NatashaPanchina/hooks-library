import React, { HTMLAttributes } from 'react';
import { GlobalStyles } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProps } from '.';
import { Link, LinkProps } from 'react-router-dom';

export const inputGlobalStyles = (
  <GlobalStyles
    styles={() => ({
      body: {
        backgroundColor: '#0f0d0e',
        color: '#f9f4da',
      },
      a: {
        textDecoration: 'none',
      },
    })}
  />
);

export const Title = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: theme.colors.main.violet,
}));

export const DescriptionTitle = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  fontWeight: 800,
  paddingBottom: theme.spacing(2),
}));

export const Container = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  padding: `${theme.spacing(5)} 0`,
}));

export const SourceCodeLink = styled((props: ThemeProps & LinkProps) => (
  <Link {...props} />
))(({ theme }) => ({
  color: theme.colors.main.violet,
}));
