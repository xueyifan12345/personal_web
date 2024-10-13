import React from 'react';
import { 
  Typography, 
  Box, 
  Container, 
  Button, 
  Chip,
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
  Avatar,
  Divider
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';

const headPhoto = require('../my-photos/headphoto.jpg');

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // 保持绿色主题
    },
    background: {
      default: 'transparent',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        bgcolor: 'background.default', 
        minHeight: '100vh',
        py: 8
      }}>
        <Container maxWidth="md">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Avatar
                alt="Alan Xue"
                src={headPhoto} // 使用导入的图片
                sx={{ 
                  width: 200, 
                  height: 200, 
                  mx: 'auto', 
                  boxShadow: 3,
                  border: '3px solid #4CAF50' // 添加绿色边框
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h2" component="h1" color="primary" fontWeight="bold">
                  Alan Xue
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  startIcon={<DownloadIcon />}
                  href="/src/resume/Yifan_Alan_Xue.pdf" 
                  download
                  sx={{ 
                    py: 1, 
                    px: 2, 
                    borderRadius: 2,
                    boxShadow: 2,
                    '&:hover': {
                      boxShadow: 4,
                    }
                  }}
                >
                  Download Resume
                </Button>
              </Box>
              <Typography variant="h4" component="h2" gutterBottom color="text.secondary">
                Software Engineer
              </Typography>
            </Grid>
          </Grid>

          <Box mt={4}>
            <Typography variant="h5" gutterBottom color="primary">
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              Skilled Frontend Engineer specializing in React.js. Demonstrated expertise in JavaScript,
              HTML, CSS, and Redux. Proven ability in agile environments, optimizing UI/UX for 
              customer-centric solutions, and embracing remote collaboration.
            </Typography>
          </Box>

          <Box mt={4}>
            <Typography variant="h5" gutterBottom color="primary">
              <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Core Skills
            </Typography>
            <Grid container spacing={1} sx={{ mb: 2 }}>
              {['React.js', 'JavaScript', 'HTML/CSS', 'Redux', 'UI/UX Optimization'].map((skill) => (
                <Grid item key={skill}>
                  <Chip label={skill} color="primary" variant="outlined" />
                </Grid>
              ))}
            </Grid>
          </Box>

        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
