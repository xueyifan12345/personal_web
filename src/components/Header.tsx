import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Tabs, 
  Tab, 
  useMediaQuery, 
  useTheme, 
  IconButton, 
  Menu, 
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'AI Chat', path: '/ai-chat' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        width: '100%',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
        background: 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)', 
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <MenuItem 
                  key={item.path} 
                  onClick={handleClose} 
                  component={Link} 
                  to={item.path}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{ 
              '& .MuiTab-root': { 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              },
              '& .Mui-selected': {
                fontWeight: 'bold',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#FF4500', 
              },
            }}
          >
            {menuItems.map((item) => (
              <Tab 
                key={item.path}
                label={item.label} 
                value={item.path} 
                component={Link} 
                to={item.path}
              />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
