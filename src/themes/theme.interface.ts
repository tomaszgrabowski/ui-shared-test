export interface ITheme {
    name: 'am' | 'toyota';
    colors: {
        primary: string;
        secondary: string;
        primaryText: string;
        secondaryText: string;
        primaryBackground: string;
        secondaryBackground: string;
    },
    fonts: {
        primary: string;
        secondary: string;
    },
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    },
    lineHeights: {
        small: string;
        medium: string;
        large: string;
    }
}
