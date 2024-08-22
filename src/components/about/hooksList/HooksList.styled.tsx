import { styled } from '@mui/material';
import { ThemeProps } from '../../../theme';
import { HTMLAttributes } from 'react';

export const Container = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <main {...props} />,
)(({ theme }) => ({
  display: 'none',
  width: '100%',
  overflow: 'hidden',
  //   animation: 'scroll 20s linear infinite',
  alignItems: 'center',
  marginBottom: theme.spacing(10),
  '@media (min-width: 600px)': {
    display: 'flex',
  },
  '@media (min-width: 900px)': {
    rowGap: theme.spacing(10),
  },
  '@media (min-width: 1200px)': {
    paddingLeft: theme.spacing(5),
  },
}));

export const HookContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: 50,
  minWidth: 220,
  marginRight: theme.spacing(5),
  border: `4px solid ${theme.colors.main.darkPink}`,
  borderRadius: theme.borderRadius,
  backgroundColor: theme.colors.main.pink,
  boxShadow: `-4px 4px ${theme.colors.main.darkPink}`,
  color: theme.colors.background,
  fontSize: '1.3rem',
  fontWeight: 500,
  fontStyle: 'italic',
}));
