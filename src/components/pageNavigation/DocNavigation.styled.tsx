import React from 'react';
import { styled } from '@mui/system';
import { ThemeProps } from '../../theme';
import { HTMLAttributes } from 'react';
import { alpha } from '@mui/material';

export const RightNavContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  right: 0,
  top: theme.spacing(23),
  padding: theme.spacing(3),
  width: `calc(200px - ${theme.spacing(3 * 2)})`,
  fontSize: '0.9rem',
  '@media (min-width: 900px)': {
    display: 'block',
  },
}));

export const Title = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  fontSize: '1.2rem',
  paddingBottom: theme.spacing(3),
}));

export const AnchorContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
)(({ theme }) => ({
  display: 'block',
  paddingBottom: theme.spacing(3),
  color: alpha(theme.colors.text, 0.5),
  '&:hover': {
    color: theme.colors.text,
  },
}));
