import { styled } from '@mui/material';
import { ThemeProps } from '../../../theme';
import { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const Container = styled(
  (props: ThemeProps & HTMLAttributes<HTMLUListElement>) => <ul {...props} />,
)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  columnGap: theme.spacing(7),
  rowGap: theme.spacing(7),
  paddingTop: theme.spacing(2),
  paddingLeft: 0,
}));

export const HookContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLLIElement>) => <li {...props} />,
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: `calc(220px - ${theme.spacing(5 * 2)})`,
  padding: theme.spacing(5),
  paddingTop: 0,
  borderRadius: theme.borderRadius,
  backgroundColor: theme.colors.background,
  transition: 'transform 0.2s ease-out',
  '&:hover': {
    transform: 'scale(1.035)',
  },
}));

export const HookLink = styled((props: ThemeProps & LinkProps) => (
  <Link {...props} />
))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  textDecoration: 'none',
  color: theme.colors.text,
}));

export const HookHeader = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <h3 {...props} />,
)(({ theme }) => ({
  color: theme.colors.main.lightGreen,
}));

export const More = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  alignSelf: 'flex-end',
  color: theme.colors.main.pink,
}));
