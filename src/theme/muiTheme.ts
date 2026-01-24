import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary.blue,
            light: colors.text.accent,
            dark: colors.primary.hover,
        },
        secondary: {
            main: colors.primary.purple,
        },
        background: {
            default: colors.surface.main,
            paper: colors.surface.card,
        },
        text: {
            primary: colors.text.primary,
            secondary: colors.text.secondary,
        },
        divider: colors.border.default,
        error: { main: colors.status.error },
        success: { main: colors.status.success },
        warning: { main: colors.status.warning },
        info: { main: colors.status.info },
    },
    typography: {
        fontFamily: '"Clash Display", "Inter", "Roboto", sans-serif', // Use a premium display font if available, fallback to Inter
        h1: { fontWeight: 700, letterSpacing: '-0.02em', color: colors.text.primary },
        h2: { fontWeight: 700, letterSpacing: '-0.01em', color: colors.text.primary },
        h3: { fontWeight: 600, letterSpacing: '-0.01em', color: colors.text.primary },
        h4: { fontWeight: 600, letterSpacing: '-0.01em' },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600, fontSize: '1.1rem' },
        subtitle1: { fontSize: '1rem', color: colors.text.secondary },
        subtitle2: { fontSize: '0.875rem', fontWeight: 500, color: colors.text.secondary },
        body1: { fontSize: '1rem', lineHeight: 1.6, color: colors.text.primary },
        body2: { fontSize: '0.875rem', lineHeight: 1.5, color: colors.text.secondary },
        button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: colors.surface.main,
                    scrollbarColor: `${colors.surface.card} ${colors.surface.main}`,
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        backgroundColor: 'transparent',
                        width: 8,
                        height: 8,
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: 8,
                        backgroundColor: colors.surface.card,
                        minHeight: 24,
                        border: `2px solid ${colors.surface.main}`,
                    },
                    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: colors.text.secondary,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.surface.card,
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))',
                    borderRadius: 16,
                    border: `1px solid ${colors.border.subtle}`,
                    boxShadow: colors.effects.cardShadow,
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: colors.effects.elevatedShadow,
                        borderColor: colors.border.default,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: '8px 16px',
                    transition: 'all 0.2s ease',
                },
                containedPrimary: {
                    background: colors.primary.gradient,
                    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.3)',
                    '&:hover': {
                        boxShadow: '0 8px 12px -2px rgba(37, 99, 235, 0.4)',
                        filter: 'brightness(1.1)',
                    },
                },
                outlined: {
                    borderColor: colors.border.default,
                    color: colors.text.secondary,
                    '&:hover': {
                        backgroundColor: colors.surface.hover,
                        borderColor: colors.text.secondary,
                        color: colors.text.primary,
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
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    margin: '4px 8px',
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        borderLeft: `3px solid ${colors.primary.blue}`,
                        '&:hover': {
                            backgroundColor: 'rgba(37, 99, 235, 0.15)',
                        },
                        '& .MuiListItemIcon-root': {
                            color: colors.primary.blue,
                        },
                        '& .MuiListItemText-primary': {
                            color: colors.primary.blue,
                            fontWeight: 600,
                        },
                    },
                    '&:hover': {
                        backgroundColor: colors.surface.hover,
                    },
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 40,
                    color: colors.text.secondary,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                },
                filled: {
                    backgroundColor: colors.surface.hover,
                },
                colorPrimary: {
                    background: 'rgba(37, 99, 235, 0.15)',
                    color: colors.primary.blue,
                },
                colorSuccess: {
                    background: colors.status.successBg,
                    color: colors.status.success,
                },
                colorWarning: {
                    background: colors.status.warningBg,
                    color: colors.status.warning,
                },
                colorError: {
                    background: colors.status.errorBg,
                    color: colors.status.error,
                },
            },
        },
    },
});
