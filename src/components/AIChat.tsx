import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  createTheme,
  Container,
  Fade,
  CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';

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

// 简历内容
const resumeContent = `
Name: Alan Xue
Current Position: Software Developer at Sagent Lending
Skills: React, JavaScript, HTML, CSS, Redux, Tailwind CSS, MUI

Work Experience:
1. Sagent Lending - Software Developer (03/2023 to Current)
 • Developed secure mode, tag modal, and topic references, streamlining user workflow and bolstering system
security, leading to a more intuitive and safe user experience.
• Engineered a new web page for localized asset management, achieving a 30% reduction in build size by
optimizing package management, thereby enhancing code clarity and responsiveness.
• Transitioned original MUI-based components to custom Tailwind-based components, significantly boosting
performance, maintainability, and styling consistency across the platform, reducing re-render times by 60%.

2. Walmart - Front-End Software Developer (01/2022 to 01/2023)
• Pioneered the development of reusable components and innovative features using React.js and HTML,
significantly enhancing legacy systems with React Hooks and ES6, thereby streamlining user interactions and
system efficiency.
• Masterfully designed and executed responsive layouts and animations with CSS Media Queries, optimizing UI
for mobile devices, which contributed to a seamless user experience across various platforms.
• Played a key role in the entire Software Development Life Cycle, from requirement analysis to maintenance,
ensuring the delivery of high-quality software. Utilized Splunk for real-time monitoring of API queries,
facilitating swift issue resolution and bolstering system reliability.

Education:
1. Master of Science - Tulane University, New Orleans, LA (2020-2021)
2. Bachelor of Science - Michigan State University, East Lansing, MI (2015-2019)

Likes:
1. Running
2. Hiking
3. Traveling
4. Cooking
5. Music
6. Dogs
`;

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, `You: ${inputMessage}`]);
      setIsLoading(true);
      try {
        const response = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
          {
            contents: [{
              parts: [{
                text: `You are an AI assistant that only answers questions about Alan Xue's resume. Here is the resume content:

${resumeContent}

Please only answer questions related to this resume. If the question is not related to the resume, politely inform the user that you can only answer questions about Alan Xue's resume.

User's question: ${inputMessage}`
              }]
            }]
          },
          {
            params: {
              key: process.env.REACT_APP_GEMINI_API_KEY
            },
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        const aiResponse = response.data.candidates[0].content.parts[0].text;
        setMessages(prevMessages => [...prevMessages, `AI: ${aiResponse}`]);
      } catch (error) {
        console.error('Error calling Gemini API:', error);
        setMessages(prevMessages => [...prevMessages, 'AI: I apologize, but there seems to be an issue with the API at the moment. Please try again later.']);
      } finally {
        setIsLoading(false);
      }
      setInputMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
            <ChatIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
            AI Chat about Alan's Resume
          </Typography>
          <Fade in={true} timeout={1000}>
            <Paper
              elevation={3}
              sx={{
                height: '60vh',
                display: 'flex',
                flexDirection: 'column',
                mb: 2,
                p: 2,
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'scale(1.01)',
                  boxShadow: 6,
                },
              }}
            >
              <List sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
                {messages.map((message, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={message} />
                  </ListItem>
                ))}
                <div ref={messagesEndRef} />
              </List>
              <Box sx={{ display: 'flex' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={inputMessage}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Alan's resume..."
                  sx={{ mr: 1 }}
                  disabled={isLoading}
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                  onClick={handleSendMessage}
                  disabled={isLoading}
                >
                  Send
                </Button>
              </Box>
            </Paper>
          </Fade>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AIChat;
