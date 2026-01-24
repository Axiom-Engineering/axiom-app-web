
import { Fragment } from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Button,
    Divider
} from '@mui/material';
import {
    Add,
    ChatBubbleOutline,
    History,
    Settings
} from '@mui/icons-material';
import { colors } from '../../../theme/colors';
import { NAV_ITEMS } from '../data/mockData';

const drawerWidth = 280;

export const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: colors.surface.sidebar,
                    color: colors.text.primary,
                    borderRight: `1px solid ${colors.border.default}`,
                },
            }}
        >


            {/* Search could go here */}

            <Box sx={{ p: 2 }}>
                <Button
                    fullWidth
                    variant="text"
                    startIcon={<Add />}
                    sx={{
                        color: colors.text.primary,
                        py: 1.5,
                        justifyContent: 'flex-start',
                        pl: 3,
                        '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                        },
                    }}
                >
                    New chat
                </Button>
            </Box>

            {/* Dynamic Sections */}
            {['Today', 'Yesterday', 'Previous 7 Days'].map((group) => {
                const groupItems = NAV_ITEMS.filter(item => item.group === group);
                if (groupItems.length === 0) return null;

                return (
                    <Fragment key={group}>
                        <Box sx={{ px: 3, py: 1, mt: group === 'Today' ? 0 : 2 }}>
                            <Typography variant="caption" sx={{ color: colors.text.secondary, fontWeight: 700, textTransform: 'uppercase' }}>
                                {group}
                            </Typography>
                        </Box>
                        <List>
                            {groupItems.map((item) => (
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton
                                        selected={item.isActive}
                                        sx={{
                                            borderRadius: 2,
                                            mx: 1,
                                            bgcolor: item.isActive ? 'rgba(59, 130, 246, 0.1) !important' : 'transparent',

                                            '&:hover': {
                                                bgcolor: 'rgba(255, 255, 255, 0.05)',
                                            },
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 40, color: item.isActive ? colors.primary.blue : colors.text.secondary }}>
                                            {item.isActive ? <ChatBubbleOutline fontSize="small" /> : <History fontSize="small" />}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.title}
                                            primaryTypographyProps={{
                                                fontSize: '0.9rem',
                                                fontWeight: item.isActive ? 500 : 400,
                                                color: item.isActive ? colors.text.primary : colors.text.secondary
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Fragment>
                );
            })}

            <Box sx={{ flexGrow: 1 }} />

            <Divider sx={{ borderColor: colors.border.default }} />

            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ borderRadius: 0 }}>
                        <ListItemIcon sx={{ minWidth: 40, color: colors.text.secondary }}>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="System Preferences" primaryTypographyProps={{ fontSize: '0.9rem', color: colors.text.secondary }} />
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>
    );
};
