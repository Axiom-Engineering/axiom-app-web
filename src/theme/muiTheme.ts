import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary.blue,
        },
        background: {
            default: colors.surface.main,
            paper: colors.surface.sidebar,
        },
        text: {
            primary: colors.text.primary,
            secondary: colors.text.secondary,
        },
        divider: colors.border.default,
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h6: {
            fontWeight: 600,
        },
        body1: {
            lineHeight: 1.6,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    fontWeight: 500,
                },
                containedPrimary: {
                    boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.5)',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.5)',
                    },
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: colors.surface.sidebar,
                    borderRight: `1px solid ${colors.border.default}`,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    backgroundColor: colors.surface.card,
                    '& fieldset': {
                        borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                        borderColor: colors.border.default,
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: colors.primary.blue,
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: `${colors.surface.card} ${colors.surface.main}`,
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        backgroundColor: 'transparent',
                        width: 8,
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: 8,
                        backgroundColor: colors.surface.card,
                        minHeight: 24,
                    },
                    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: colors.text.secondary,
                    },
                },
            },
        },
    },
});
