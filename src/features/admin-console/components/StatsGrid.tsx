

import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box
} from '@mui/material';
import {
    Memory as CpuIcon,
    Group as UsersIcon,
    Work as ProjectIcon,
    TrendingUp as TrendIcon
} from '@mui/icons-material';
import { colors, withOpacity } from '../../../theme/colors';

const StatCard = ({ value, label, icon: Icon, color, trend }: any) => (
    <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* Background Glow Effect */}
        <Box sx={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 100,
            height: 100,
            backgroundImage: `radial-gradient(circle, ${withOpacity(color, 0.2)} 0%, transparent 70%)`,
            zIndex: 0,
        }} />

        <CardContent sx={{ position: 'relative', zIndex: 1, p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box sx={{
                    p: 1.5,
                    borderRadius: 3,
                    background: withOpacity(color, 0.1),
                    color: color,
                    display: 'flex',
                }}>
                    <Icon fontSize="medium" />
                </Box>
                {trend && (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: colors.status.success,
                        bgcolor: colors.status.successBg,
                        px: 1,
                        py: 0.5,
                        borderRadius: 20
                    }}>
                        <TrendIcon sx={{ fontSize: 14 }} />
                        <Typography variant="caption" fontWeight="bold">
                            {trend}
                        </Typography>
                    </Box>
                )}
            </Box>

            <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 700 }}>
                {value}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                {label}
            </Typography>
        </CardContent>
    </Card>
);

export const StatsGrid = () => {
    const stats = [
        {
            title: 'Projects',
            value: '42',
            label: 'Total Active Projects',
            icon: ProjectIcon,
            color: colors.primary.blue,
            trend: '+12%'
        },
        {
            title: 'Users',
            value: '1,250',
            label: 'Active Platform Members',
            icon: UsersIcon,
            color: colors.primary.purple,
            trend: '+5%'
        },
        {
            title: 'AI Usage',
            value: '98.5%',
            label: 'model Uptime',
            icon: CpuIcon,
            color: colors.status.info,
            trend: '+2%'
        },
        {
            title: 'Revenue', // Or some other metric relevant to Enterprise Admin
            value: '840',
            label: 'Daily Query Volume',
            icon: TrendIcon,
            color: colors.status.warning,
            trend: '+18%'
        }
    ];

    return (
        <Grid container spacing={3}>
            {stats.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                    <StatCard {...stat} />
                </Grid>
            ))}
        </Grid>
    );
};
