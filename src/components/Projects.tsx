import React from 'react';
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  createTheme,
  Fade,
  Chip
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ConstructionIcon from '@mui/icons-material/Construction';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#4CAF50',
    },
  },
});

const Projects: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box sx={{ padding: 4 }}>
          <Typography 
            variant="h4" 
            gutterBottom 
            color="primary" 
            sx={{ 
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              marginBottom: 4,
              display: 'inline-block'
            }}
          >
            <WorkIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
            Projects
          </Typography>

          <Fade in={true} timeout={1000}>
            <Card elevation={3} sx={{ 
              mb: 4, 
              p: 2,
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: 6,
              },
            }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item>
                    <ConstructionIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" align="center" gutterBottom>
                      Work in Progress
                    </Typography>
                    <Typography variant="body1" align="center">
                      Exciting projects are currently under development. 
                      Check back soon for updates!
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Fade>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Projects;
