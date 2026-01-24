

import { Box, Typography, Button, Container } from '@mui/material';
import { AdminLayout } from '../layouts/AdminLayout';
import { StatsGrid } from '../components/StatsGrid';
import { ProjectGrid } from '../components/ProjectGrid';
import { Add } from '@mui/icons-material';
import { colors } from '../../../theme/colors';

export const AdminDashboard = () => {
    return (
        <AdminLayout>
            <Container maxWidth="xl" disableGutters>
                {/* Header Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
                    <Box>
                        <Typography variant="h4" sx={{
                            fontWeight: 700,
                            color: colors.text.primary,
                            mb: 1
                        }}>
                            Dashboard Overview
                        </Typography>
                        <Typography variant="body1" sx={{ color: colors.text.secondary }}>
                            Welcome back, Admin. Here's what's happening today.
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Add />}
                        sx={{ px: 3, py: 1.2 }}
                    >
                        New Project
                    </Button>
                </Box>

                {/* Stats Section */}
                <Box sx={{ mb: 6 }}>
                    <StatsGrid />
                </Box>

                {/* Main Content Section - Project Grid */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            Active Projects
                        </Typography>
                        <Button variant="text" color="primary">
                            View All Projects
                        </Button>
                    </Box>
                    <ProjectGrid />
                </Box>
            </Container>
        </AdminLayout>
    );
};
