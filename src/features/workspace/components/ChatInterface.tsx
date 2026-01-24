import React from 'react';
import { Box, Paper, TextField, IconButton, Typography } from '@mui/material';
import { Send, Notifications, AccountCircle } from '@mui/icons-material';
import { colors } from '../../../theme/colors';
import { MessageBubble } from './MessageBubble';
import { CHAT_MESSAGES } from '../data/mockData';

export const ChatInterface = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: colors.surface.main }}>
            {/* Header */}
            <Box sx={{
                p: 2,
                position: 'relative',
                borderBottom: `1px solid ${colors.border.default}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <Box sx={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Typography variant="h6" sx={{ color: colors.text.primary }}>Refactoring Auth Logic</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

                    <IconButton sx={{ color: colors.text.secondary }}>
                        <Notifications />
                    </IconButton>
                    <IconButton sx={{ color: colors.text.secondary }}>
                        <AccountCircle fontSize="large" sx={{ color: '#94A3B8' }} />
                    </IconButton>
                </Box>
            </Box>

            {/* Messages Area */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {CHAT_MESSAGES.map((msg, index) => (
                    <React.Fragment key={msg.id}>
                        {/* Spacer for first item if needed, but standard list is fine */}
                        {index === 0 && <Box sx={{ height: '5vh' }} />}

                        <MessageBubble
                            isAi={msg.isAi}
                            message={msg.text}
                            senderName={msg.sender}
                        />

                        {msg.codeBlock && (
                            <Box sx={{ ml: 7, maxWidth: '80%' }}>
                                <Paper sx={{ bgcolor: '#0D1117', p: 2, borderRadius: 2, border: `1px solid ${colors.border.default}`, fontFamily: 'monospace' }}>
                                    <Box sx={{ display: 'flex', borderBottom: '1px solid #30363d', pb: 1, mb: 1, justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FF5F56' }} />
                                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FFBD2E' }} />
                                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#27C93F' }} />
                                        </Box>
                                        <Typography variant="caption" sx={{ color: colors.text.secondary }}>{msg.codeBlock.filename || 'code.js'}</Typography>
                                    </Box>
                                    <Typography variant="body2" component="pre" sx={{ color: '#c9d1d9', overflowX: 'auto', m: 0 }}>
                                        {msg.codeBlock.code}
                                    </Typography>
                                </Paper>
                            </Box>
                        )}
                    </React.Fragment>
                ))}
            </Box>

            {/* Input Area */}
            <Box sx={{ p: 3, pb: 4 }}>
                <Paper
                    component="form"
                    sx={{
                        p: '24px 40px',
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: colors.surface.sidebar,
                        borderRadius: '30px',
                        border: `1px solid ${colors.border.default}`,
                        boxShadow: 'none',
                        width: '100%',
                        maxWidth: '800px',
                        mx: 'auto'
                    }}
                >


                    <TextField
                        sx={{ flex: 1 }}
                        placeholder="Ask a technical question or paste a code block..."
                        variant="standard"
                        InputProps={{
                            disableUnderline: true,
                            sx: { color: colors.text.primary, px: 1 }
                        }}
                    />

                    <IconButton sx={{ p: '10px', color: colors.primary.blue }} aria-label="send">
                        <Send />
                    </IconButton>
                </Paper>


            </Box>
        </Box>
    );
};
