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
        backgroundImage: `repeating-linear-gradient(to right, #241f18, #241f18 1px,transparent 1px,transparent 30px),repeating-linear-gradient(to bottom, #241f18, #241f18 1px,transparent 1px,transparent 30px)`,
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
  display: 'flex',
  alignItems: 'center',
  fontWeight: 800,
  paddingBottom: theme.spacing(2),
  height: 30,
  '&:hover svg': {
    display: 'flex',
  },
}));

export const Container = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  padding: `${theme.spacing(5)} 0`,
  scrollMarginTop: theme.spacing(14),
}));

export const ParametersContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  scrollMarginTop: theme.spacing(14),
}));

export const SourceCodeLink = styled((props: ThemeProps & LinkProps) => (
  <Link {...props} />
))(({ theme }) => ({
  color: theme.colors.main.violet,
}));

export const LinkSvg = styled(
  (props: ThemeProps & HTMLAttributes<SVGElement>) => <svg {...props} />,
)(({ theme }) => ({
  display: 'none',
  marginLeft: theme.spacing(2),
  height: 15,
  width: 15,
  '&:hover': {
    height: 18,
    width: 18,
    transition: 'all .15s ease-in-out',
  },
}));
