/**
 * Axiom Design System - Color Palette
 * High-end, modern dark theme optimized for Enterprise AI Dashboard
 */

export const colors = {
    // Brand & Primary
    primary: {
        blue: '#2563EB',      // Inter Blue
        purple: '#7C3AED',    // Vivid Purple
        cyan: '#0891B2',      // Cyan
        gradient: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        hover: '#1D4ED8',
    },

    // Background Surfaces
    surface: {
        main: '#0F1117',      // Very dark blue/gray - Global background
        sidebar: '#161920',   // Slightly lighter - Navigation
        card: '#1E2330',      // Card background
        paper: '#1F2433',     // Elevated surfaces
        hover: '#2A3042',     // Hover state
        glass: 'rgba(30, 35, 48, 0.70)', // Glassmorphism base
        glassDark: 'rgba(15, 17, 23, 0.85)',
        overlay: 'rgba(0, 0, 0, 0.7)',
    },

    // Text & Content
    text: {
        primary: '#F3F4F6',   // Almost white (Gray 100)
        secondary: '#9CA3AF', // Muted gray (Gray 400)
        muted: '#6B7280',     // Darker gray (Gray 500)
        accent: '#60A5FA',    // Light blue for links/accents
        inverse: '#111827',   // Dark text for light backgrounds
    },

    // Borders & Dividers
    border: {
        default: '#2D3748',   // Standard border
        subtle: '#1F2937',    // Subtle separator
        highlight: '#3B82F6', // Focus states
        glass: 'rgba(255, 255, 255, 0.08)', // For glass barriers
    },

    // Status Indicators
    status: {
        success: '#10B981',
        successBg: 'rgba(16, 185, 129, 0.15)',
        warning: '#F59E0B',
        warningBg: 'rgba(245, 158, 11, 0.15)',
        error: '#EF4444',
        errorBg: 'rgba(239, 68, 68, 0.15)',
        info: '#3B82F6',
        infoBg: 'rgba(59, 130, 246, 0.15)',
    },

    // Gradients & Effects
    effects: {
        glow: '0 0 20px rgba(37, 99, 235, 0.2)',
        glowPurple: '0 0 20px rgba(124, 58, 237, 0.2)',
        cardShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15)',
        elevatedShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(12px)',
    }
} as const;

/**
 * Semantic color mappings
 */
export const semanticColors = {
    button: {
        primary: colors.primary.blue,
        primaryHover: colors.primary.hover,
        secondary: colors.surface.card,
        secondaryHover: colors.surface.hover,
    },
    background: {
        app: colors.surface.main,
        sidebar: colors.surface.sidebar,
        card: colors.surface.card,
        modal: colors.surface.paper,
    },
    text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
        muted: colors.text.muted,
        link: colors.text.accent,
    },
    border: {
        default: colors.border.default,
        focus: colors.primary.blue,
    },
} as const;

// Helper for opacity
export const withOpacity = (color: string, opacity: number): string => {
    // Remove # if present
    const hex = color.replace('#', '');

    // Handle short hex like #fff
    let r, g, b;

    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default colors;
