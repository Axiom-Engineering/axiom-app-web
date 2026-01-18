import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import { SmartToy, Person } from '@mui/icons-material';
import { colors } from '../../../theme/colors';

interface MessageBubbleProps {
    isAi: boolean;
    message: string;
    senderName?: string;
    timestamp?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ isAi, message, senderName }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isAi ? 'row' : 'row-reverse',
                gap: 2,
                mb: 3,
                maxWidth: '100%',
            }}
        >
            {/* Avatar */}
            <Avatar
                sx={{
                    bgcolor: isAi ? colors.primary.blue : colors.surface.card,
                    color: isAi ? '#fff' : colors.text.primary,
                    width: 40,
                    height: 40,
                }}
            >
                {isAi ? <SmartToy fontSize="small" /> : <Person fontSize="small" />}
            </Avatar>

            {/* Message Content */}
            <Box sx={{ maxWidth: '70%', display: 'flex', flexDirection: 'column', alignItems: isAi ? 'flex-start' : 'flex-end' }}>
                {isAi && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5, gap: 1 }}>
                        <Typography variant="caption" sx={{ color: colors.text.secondary, fontWeight: 700, letterSpacing: '0.05em' }}>
                            {senderName || 'AI ASSISTANT'}
                        </Typography>
                    </Box>
                )}

                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: isAi ? 'transparent' : '#1A202C',
                        border: isAi ? 'none' : `1px solid ${colors.border.default}`,
                    }}
                >
                    {/* We might need markdown support later. For now just text. */}
                    <Typography variant="body1" sx={{ color: isAi ? colors.text.primary : '#E2E8F0', whiteSpace: 'pre-wrap' }}>
                        {message}
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};
