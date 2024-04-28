import React, { HTMLAttributes } from 'react';
import { styled } from '@mui/system';
import { ThemeProps } from '../../theme';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const NavContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  top: 56,
  left: 0,
  height: `calc(100vh - 56px)`,
  padding: theme.spacing(3),
  width: `calc(200px - ${theme.spacing(3 * 2)})`,
  '@media (min-width: 1200px)': {
    display: 'block',
  },
}));

export const DocsContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  padding: `${theme.spacing(5)} ${theme.spacing(2)}`,
  backgroundColor: theme.colors.background,
  borderRadius: theme.borderRadius,
  '@media (min-width: 600px)': {
    padding: `${theme.spacing(5)} ${theme.spacing(7)}`,
  },
}));

export const DocsLink = styled((props: ThemeProps & NavLinkProps) => (
  <NavLink {...props} />
))(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  width: `calc(100% - ${theme.spacing(2 * 2)})`,
  color: theme.colors.text,
  borderRadius: theme.borderRadius,
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: theme.colors.grey[500],
    transition: 'all 0.3s ease-out',
  },
  '&.active': {
    backgroundColor: theme.colors.grey[500],
    fontWeight: 600,
  },
}));
