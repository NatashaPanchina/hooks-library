import { Theme } from '@mui/material';

export const themeColors = {
  colors: {
    main: {
      savanna: '#e3ceab',
      salmon: '#cc9393',
      green: '#7f9f7f',
      black: '#0f0d0e',
      pink: '#F38BA3',
      yellow: '#FCBA28',
      purple: '#b586f8',
    },
    black: '#000000',
    grey: {
      500: '#3d383a',
    },
    green: {
      bright: '#4fbb4f',
    },
    text: '#f9f4da',
    background: '#231f20',
  },
  borderRadius: 8,
  spacing: (multiple: number) => multiple * 4,
};

export interface CustomTheme extends Theme {
  colors: {
    main: {
      savanna: '#e3ceab';
      salmon: '#cc9393';
      green: '#7f9f7f';
      black: '#0f0d0e';
      pink: '#F38BA3';
      yellow: '#FCBA28';
      purple: '#b586f8';
    };
    black: '#000000';
    grey: {
      500: '#3d383a';
    };
    green: {
      bright: '#4fbb4f';
    };
    text: '#f9f4da';
    background: '#231f20';
  };
  borderRadius: 8;
}

export interface ThemeProps {
  theme?: CustomTheme;
}
