import { styled } from '@mui/material';
import { ThemeProps } from '../../../theme';
import { HTMLAttributes } from 'react';

export const Container = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <footer {...props} />,
)(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  justifyContent: 'center',
  marginTop: theme.spacing(15),
  color: theme.colors.main.savanna,
}));
