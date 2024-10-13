import React from 'react';
import { 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Box, 
  Chip,
  ThemeProvider,
  createTheme,
  Container,
  Fade
} from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

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

const Experience: React.FC = () => {
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
            Work Experience
          </Typography>
          <Timeline position="alternate">
            <Fade in={true} timeout={1000}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card elevation={3} sx={{ 
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 6,
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" component="div" color="primary">
                        Software Developer
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Sagent Lending – Lewisville, TX | 03/2023 to Current
                      </Typography>
                      <Box mt={2} mb={2}>
                        <Chip label="React" size="small" sx={{ mr: 1, mb: 1 }} />
                        <Chip label="Tailwind CSS" size="small" sx={{ mr: 1, mb: 1 }} />
                        <Chip label="MUI" size="small" sx={{ mr: 1, mb: 1 }} />
                      </Box>
                      <Typography variant="body2" paragraph>
                        • Developed secure mode, tag modal, and topic references, streamlining user workflow and bolstering system security, leading to a more intuitive and safe user experience.
                      </Typography>
                      <Typography variant="body2" paragraph>
                        • Engineered a new web page for localized asset management, achieving a 30% reduction in build size by optimizing package management, thereby enhancing code clarity and responsiveness.
                      </Typography>
                      <Typography variant="body2">
                        • Transitioned original MUI-based components to custom Tailwind-based components, significantly boosting performance, maintainability, and styling consistency across the platform, reducing re-render times by 60%.
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            </Fade>

            <Fade in={true} timeout={1500}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card elevation={3} sx={{ 
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 6,
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" component="div" color="primary">
                        Front-End Software Developer
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Walmart – Sunnyvale, CA | 01/2022 to 01/2023
                      </Typography>
                      <Box mt={2} mb={2}>
                        <Chip label="React.js" size="small" sx={{ mr: 1, mb: 1 }} />
                        <Chip label="HTML" size="small" sx={{ mr: 1, mb: 1 }} />
                        <Chip label="CSS" size="small" sx={{ mr: 1, mb: 1 }} />
                        <Chip label="ES6" size="small" sx={{ mr: 1, mb: 1 }} />
                      </Box>
                      <Typography variant="body2" paragraph>
                        • Pioneered the development of reusable components and innovative features using React.js and HTML, significantly enhancing legacy systems with React Hooks and ES6, thereby streamlining user interactions and system efficiency.
                      </Typography>
                      <Typography variant="body2" paragraph>
                        • Masterfully designed and executed responsive layouts and animations with CSS Media Queries, optimizing UI for mobile devices, which contributed to a seamless user experience across various platforms.
                      </Typography>
                      <Typography variant="body2">
                        • Played a key role in the entire Software Development Life Cycle, from requirement analysis to maintenance, ensuring the delivery of high-quality software. Utilized Splunk for real-time monitoring and troubleshooting.
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            </Fade>
          </Timeline>

          <Typography 
            variant="h4" 
            gutterBottom 
            color="primary" 
            sx={{ 
              borderBottom: '2px solid #4CAF50',
              paddingBottom: 1,
              marginTop: 6,
              marginBottom: 4,
              display: 'inline-block'
            }}
          >
            <SchoolIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
            Education Experience
          </Typography>
          <Timeline position="alternate">
            <Fade in={true} timeout={1000}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card elevation={3} sx={{ 
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 6,
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" component="div" color="primary">
                        Master of Science
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Tulane University | New Orleans, LA | 2020-2021
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            </Fade>

            <Fade in={true} timeout={1500}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <Card elevation={3} sx={{ 
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 6,
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" component="div" color="primary">
                        Bachelor of Science
                      </Typography>
                      <Typography color="textSecondary" gutterBottom>
                        Michigan State University | East Lansing, MI | 2015-2019
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            </Fade>
          </Timeline>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Experience;
