import React, { HTMLAttributes } from 'react';
import { styled } from '@mui/system';
import { ThemeProps } from '../../theme';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const NavContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  position: 'fixed',
  top: 56,
  left: 0,
  height: `calc(100vh - 56px)`,
  padding: theme.spacing(3),
  width: `calc(200px - ${theme.spacing(3 * 2)})`,
  backgroundColor: theme.colors.background,
}));

export const DocsContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  padding: `${theme.spacing(5)} ${theme.spacing(10)}`,
  backgroundColor: theme.colors.background,
  borderRadius: theme.borderRadius,
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
    color: theme.colors.main.yellow,
    backgroundColor: theme.colors.grey[500],
  },
}));
