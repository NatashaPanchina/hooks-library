import { Theme } from '@mui/material';

export const themeColors = {
  colors: {
    main: {
      savanna: '#e3ceab',
      salmon: '#cc9393',
      green: '#7f9f7f',
    },
    grey: {
      500: '#3f3f3f',
    },
    text: '#e3ceab',
    background: '#0f0d0e',
  },
  grey: {
    500: '#3f3f3f',
  },
  text: '#e3ceab',
  borderRadius: 4,
  spacing: (multiple: number) => multiple * 4,
};

export interface CustomTheme extends Theme {
  colors: {
    main: {
      savanna: '#e3ceab';
      salmon: '#cc9393';
      green: '#7f9f7f';
    };
    grey: {
      500: '#3f3f3f';
    };
    green: {
      bright: '#56b156';
    };
    text: '#e3ceab';
    background: '#0f0d0e';
  };
  borderRadius: 4;
}

export interface ThemeProps {
  theme?: CustomTheme;
}
