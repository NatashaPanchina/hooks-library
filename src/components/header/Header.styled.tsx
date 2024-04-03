import React from 'react';
import { alpha, styled } from '@mui/system';
import { ThemeProps } from '../../theme';
import { HTMLAttributes } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const Container = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: `calc(100% - ${theme.spacing(4 * 2)})`,
  padding: `0px ${theme.spacing(4)}`,
  height: 56,
  boxShadow: `0px 4px 10px ${alpha(theme.colors.black, 0.2)}`,
  backgroundColor: theme.colors.background,
}));

export const HomeLink = styled((props: ThemeProps & NavLinkProps) => (
  <NavLink {...props} />
))(({ theme }) => ({
  textDecoration: 'none',
  color: theme.colors.text,
}));

export const DocsLink = styled((props: ThemeProps & NavLinkProps) => (
  <NavLink {...props} />
))(({ theme }) => ({
  color: theme.colors.text,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  '&:hover': {
    color: theme.colors.main.yellow,
    transition: 'all 0.3s ease-out',
  },
  '&.active': {
    color: theme.colors.main.yellow,
  },
}));