

import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Avatar,
    AvatarGroup,
    Chip,
    Button
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { colors } from '../../../theme/colors';

const projects = [
    {
        id: 1,
        title: 'Quantum Analytics Core',
        description: 'Next-gen data processing engine for real-time market prediction.',
        members: 12,
        status: 'Active',
        tags: ['AI', 'Finance'],
    },
    {
        id: 2,
        title: 'Nebula Knowledge Base',
        description: 'Centralized vector database for corporate document retrieval.',
        members: 8,
        status: 'Development',
        tags: ['RAG', 'Internal'],
    },
    {
        id: 3,
        title: 'Cortex Vision System',
        description: 'Computer vision pipeline for manufacturing defect detection.',
        members: 15,
        status: 'Active',
        tags: ['Vision', 'IoT'],
    },
    {
        id: 4,
        title: 'Axiom Chatbot V2',
        description: 'Upgraded conversational agent with emotional intelligence.',
        members: 6,
        status: 'Review',
        tags: ['NLP', 'Customer'],
    },
    {
        id: 5,
        title: 'SecureAuth Gateway',
        description: 'Biometric authentication service for high-security zones.',
        members: 9,
        status: 'Active',
        tags: ['Security', 'Identity'],
    },
    {
        id: 6,
        title: 'DataFleet Sync',
        description: 'Distributed synchronization protocol for edge devices.',
        members: 4,
        status: 'Planning',
        tags: ['Edge', 'Infra'],
    },
];

const ProjectCard = ({ project }: any) => (
    <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        '&:hover': {
            borderColor: colors.primary.blue,
            '& .view-btn': {
                opacity: 1,
                transform: 'translateX(0)',
            }
        }
    }}>
        <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {project.tags.map((tag: string) => (
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                                fontSize: '0.7rem',
                                height: 20,
                                bgcolor: colors.surface.hover,
                                color: colors.text.secondary
                            }}
                        />
                    ))}
                </Box>
                <Chip
                    label={project.status}
                    size="small"
                    color={project.status === 'Active' ? 'success' : 'default'}
                    variant={project.status === 'Active' ? 'filled' : 'outlined'}
                    sx={{ height: 24 }}
                />
            </Box>

            <Typography variant="h6" sx={{ mb: 1, color: colors.text.primary }}>
                {project.title}
            </Typography>

            <Typography variant="body2" sx={{ color: colors.text.secondary, mb: 3, minHeight: 40 }}>
                {project.description}
            </Typography>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 'auto',
                pt: 2,
                borderTop: `1px solid ${colors.border.subtle}`
            }}>
                <AvatarGroup max={4} sx={{
                    '& .MuiAvatar-root': { width: 30, height: 30, fontSize: '0.8rem', borderColor: colors.surface.card }
                }}>
                    {[...Array(project.members)].map((_, i) => (
                        <Avatar key={i} alt={`Member ${i}`} src={`https://i.pravatar.cc/150?u=${project.id}${i}`} />
                    ))}
                </AvatarGroup>

                <Button
                    className="view-btn"
                    endIcon={<ArrowForward fontSize="small" />}
                    sx={{
                        opacity: 0,
                        transform: 'translateX(-10px)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        color: colors.primary.blue
                    }}
                >
                    Details
                </Button>
            </Box>
        </CardContent>
    </Card>
);

export const ProjectGrid = () => {
    return (
        <Grid container spacing={3}>
            {projects.map((project) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Grid>
    );
};
