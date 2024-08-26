import { styled } from '@mui/material';
import { ThemeProps } from '../../../theme';
import { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const Container = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => (
    <section {...props} />
  ),
)(({ theme }) => ({
  display: 'none',
  '&:hover>div:nth-of-type(1):not(:hover)': {
    WebkitAnimationPlayState: 'paused',
    MozAnimationPlayState: 'paused',
    OAnimationPlayState: 'paused',
    animationPlayState: 'paused',
  },
  '@media (min-width: 600px)': {
    display: 'flex',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    marginBottom: theme.spacing(10),
    maskImage: `linear-gradient(90deg, transparent, ${theme.colors.background} 20%, ${theme.colors.background} 80%, transparent)`,
  },
  '@media (min-width: 1200px)': {
    paddingLeft: theme.spacing(5),
  },
}));

export const HooksWrapper = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(() => ({
  whiteSpace: 'nowrap',
  animation: 'scroll-horizontal 70s linear infinite',
  '&:hover': {
    WebkitAnimationPlayState: 'paused',
    MozAnimationPlayState: 'paused',
    OAnimationPlayState: 'paused',
    animationPlayState: 'paused',
  },
  '&:hover~div': {
    WebkitAnimationPlayState: 'paused',
    MozAnimationPlayState: 'paused',
    OAnimationPlayState: 'paused',
    animationPlayState: 'paused',
  },
}));

export const SecondHooksWrapper = styled(
  (props: ThemeProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)(() => ({
  whiteSpace: 'nowrap',
  animation: 'scroll2-horizontal 70s linear infinite',
  animationDelay: '-35s',
  '&:hover': {
    WebkitAnimationPlayState: 'paused',
    MozAnimationPlayState: 'paused',
    OAnimationPlayState: 'paused',
    animationPlayState: 'paused',
  },
}));

export const HookContainer = styled((props: ThemeProps & LinkProps) => (
  <Link {...props} />
))(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  '&:hover': {
    cursor: 'pointer',
  },
}));
