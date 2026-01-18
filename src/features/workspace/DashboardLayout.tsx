
import { Box, CssBaseline } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import { ChatInterface } from './components/ChatInterface';

export const DashboardLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar />
            <Box
                component="main"
                sx={{ flexGrow: 1, minWidth: 0 }}
            >
                <ChatInterface />
            </Box>
        </Box>
    );
};
