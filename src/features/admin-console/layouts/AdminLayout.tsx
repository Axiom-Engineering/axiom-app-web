
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { AdminSidebar } from '../components/AdminSidebar';
import { colors } from '../../../theme/colors';

interface AdminLayoutProps {
    children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: colors.surface.main }}>
            <CssBaseline />
            <AdminSidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 4,
                    width: { sm: `calc(100% - 280px)` }, // Adjust for sidebar width
                    minHeight: '100vh',
                    overflow: 'auto',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};
