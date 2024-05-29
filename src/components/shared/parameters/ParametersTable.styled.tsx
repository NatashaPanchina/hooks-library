import { HTMLAttributes } from 'react';
import { styled } from '@mui/system';
import { ThemeProps } from '../../../theme';
import { Divider } from '@mui/material';

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
}));

export const ValuesTable = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  marginTop: theme.spacing(2),
  border: `1px solid ${theme.colors.grey[500]}`,
}));

export const HeaderGrid = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 3fr',
  gridColumnGap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.colors.grey[500],
  fontSize: '0.9rem',
}));

export const InfoGrid = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 3fr',
  gridColumnGap: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const Type = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  color: theme.colors.main.pink,
}));

export const Name = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  color: theme.colors.main.yellow,
}));

export const Hr = styled(
  (props: ThemeProps & HTMLAttributes<HTMLHRElement>) => <Divider {...props} />,
)(({ theme }) => ({
  color: theme.colors.grey[500],
}));
