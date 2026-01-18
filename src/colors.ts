export const colors = {
    // Primary Accent
    primary: {
        blue: '#3B82F6',
    },

    // Dark Mode Surface Colors
    surface: {
        main: '#0F172A', // Deep navy-charcoal - Primary chat area background
        sidebar: '#1E293B', // Lighter blue-gray - Sidebar/navigation background
        card: '#334155', // Message bubbles and card surfaces
    },

    // Typography & Details
    text: {
        primary: '#F8FAFC', // Off-white/light-gray - Maximum readability
        secondary: '#94A3B8', // Muted gray-blue - Timestamps, inactive text
    },

    // Borders & Dividers
    border: {
        default: '#1E293B', // Subtle dark border for separation
    },
} as const;

/**
 * Semantic color mappings for specific UI elements
 */
export const semanticColors = {
    // Buttons
    button: {
        primary: colors.primary.blue,
        primaryHover: '#2563EB', // Slightly darker blue for hover
        primaryActive: '#1D4ED8', // Even darker for active state
    },

    // Backgrounds
    background: {
        app: colors.surface.main,
        sidebar: colors.surface.sidebar,
        message: colors.surface.card,
        hover: '#475569', // Lighter surface for hover states
    },

    // Text
    text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
        muted: '#64748B', // Even more muted for hints/placeholders
        link: colors.primary.blue,
    },

    // Borders
    border: {
        default: colors.border.default,
        focus: colors.primary.blue,
        subtle: '#2D3748', // Very subtle borders
    },

    // Status colors (optional, for future use)
    status: {
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: colors.primary.blue,
    },
} as const;

/**
 * Type-safe color accessor
 */
export type ColorPalette = typeof colors;
export type SemanticColors = typeof semanticColors;

/**
 * Helper function to get color with opacity
 * @param color - Hex color code
 * @param opacity - Opacity value between 0 and 1
 * @returns RGBA color string
 */
export const withOpacity = (color: string, opacity: number): string => {
    // Remove # if present
    const hex = color.replace('#', '');

    // Parse hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Export individual colors for convenience
 */
export const {
    primary,
    surface,
    text,
    border,
} = colors;

export default colors;
