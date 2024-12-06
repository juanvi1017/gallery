import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MenuTop() {

  const navigateSocial = (url) => {
    window.open(url)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} style={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => navigateSocial('https://www.instagram.com/juanvi1017/')}
              sx={{ mr: 2 }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => navigateSocial('https://github.com/juanvi1017')}
              sx={{ mr: 2 }}
            >
              <GitHubIcon />
            </IconButton>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            GALLERY
          </Typography>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}