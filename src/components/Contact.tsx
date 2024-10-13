import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  ThemeProvider,
  createTheme,
  Fade
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import ContactMailIcon from '@mui/icons-material/ContactMail';

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

const Contact: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };


    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSnackbarMessage('Message sent successfully!');
        setOpenSnackbar(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      },
      (error) => {
        console.log('FAILED...', error);
        setSnackbarMessage('Failed to send message. Please try again.');
        setOpenSnackbar(true);
      }
    );
  };

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
            <ContactMailIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
            Contact Me
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
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center">
                      <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="body1">
                        (+1) 805-918-3669
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center">
                      <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="body1">
                        xueyifan12345@gmail.com
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Fade>

          <Fade in={true} timeout={1500}>
            <Card elevation={3} sx={{
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: 6,
              },
            }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Send me a message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Fade>
        </Box>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </ThemeProvider>
  );
}

export default Contact;
