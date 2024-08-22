import { styled } from '@mui/material';
import { ThemeProps } from '../../theme';
import { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const Container = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <main {...props} />,
)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: 400,
}));

export const LogoContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 350,
  '@media (min-width: 600px)': {
    width: 400,
  },
  '@media (min-width: 900px)': {
    width: 500,
  },
}));

export const LogoSvg = styled(
  (props: ThemeProps & HTMLAttributes<SVGElement>) => <svg {...props} />,
)(() => ({
  width: 'inherit',
}));

export const AboutContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  fontSize: '1.2rem',
}));

export const InstallContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(5),
  marginTop: theme.spacing(18),
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '1.2rem',
  fontFamily: 'Courier, monospace',
  backgroundColor: theme.colors.background,
  borderRadius: theme.borderRadius,
}));

export const FooterContainer = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <footer {...props} />,
)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const DocsLink = styled((props: ThemeProps & LinkProps) => (
  <Link {...props} />
))(({ theme }) => ({
  fontSize: '1rem',
  color: theme.colors.main.purple,
  padding: theme.spacing(2),
  '&:hover': {
    color: theme.colors.main.violet,
  },
}));
