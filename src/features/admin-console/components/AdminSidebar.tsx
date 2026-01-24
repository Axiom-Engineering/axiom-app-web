

import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Typography,
    Avatar
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Work as ProjectIcon,
    MenuBook as KnowledgeIcon,
    Group as UsersIcon,
    Settings as SettingsIcon,
    AutoAwesome as LogoIcon
} from '@mui/icons-material';
import { colors } from '../../../theme/colors';

const DRAWER_WIDTH = 280;

interface AdminSidebarProps {
    open?: boolean;
    onClose?: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = () => {
    // In a real app, this would use router hook like useLocation
    // For now we'll just mock the active state
    const activeRoute = 'dashboard';

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
        { id: 'projects', label: 'Project Management', icon: <ProjectIcon /> },
        { id: 'knowledge', label: 'Knowledge Base', icon: <KnowledgeIcon /> },
        { id: 'users', label: 'Users Access', icon: <UsersIcon /> },
        { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    backgroundColor: colors.surface.sidebar,
                    borderRight: `1px solid ${colors.border.subtle}`,
                },
            }}
        >
            {/* Logo Section */}
            <Box sx={{
                p: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                borderBottom: `1px solid ${colors.border.subtle}`
            }}>
                <Avatar
                    sx={{
                        bgcolor: 'transparent',
                        background: colors.primary.gradient,
                        width: 40,
                        height: 40
                    }}
                >
                    <LogoIcon />
                </Avatar>
                <Typography variant="h5" sx={{
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(to right, #fff, #9CA3AF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Axiom
                </Typography>
            </Box>

            {/* Navigation Items */}
            <Box sx={{ p: 2, flexGrow: 1 }}>
                <List>
                    {menuItems.map((item) => (
                        <ListItemButton
                            key={item.id}
                            selected={activeRoute === item.id}
                            sx={{ mb: 1 }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '0.9rem',
                                    fontWeight: activeRoute === item.id ? 600 : 500
                                }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            {/* User Profile Snippet (Bottom) */}
            <Box sx={{
                p: 2,
                borderTop: `1px solid ${colors.border.subtle}`,
                backgroundColor: 'rgba(0,0,0,0.2)'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        sx={{ width: 36, height: 36, border: `2px solid ${colors.primary.blue}` }}
                    />
                    <Box>
                        <Typography variant="subtitle2" sx={{ color: colors.text.primary, fontWeight: 600 }}>
                            Admin User
                        </Typography>
                        <Typography variant="caption" sx={{ color: colors.text.secondary }}>
                            admin@axiom.ai
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer >
    );
};
