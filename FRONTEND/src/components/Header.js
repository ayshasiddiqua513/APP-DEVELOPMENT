import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'forestgreen', height: 80 }}>
      <Toolbar sx={{ minHeight: '80px', display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h4" // Adjust font size here
          sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white' }} // Adjust font weight and color here
        >
          AgroVista
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ fontSize: '16px', fontWeight: '500' }} // Adjust button font size and weight
        >
          Home
        </Button>
        {/* <Button
          color="inherit"
          component={Link}
          to="/farmer-view"
          sx={{ fontSize: '16px', fontWeight: '500' }} // Adjust button font size and weight
        >
          Farmer's View
        </Button> */}
        <Button
          color="inherit"
          component={Link}
          to="/weather"
          sx={{ fontSize: '16px', fontWeight: '500' }} // Adjust button font size and weight
        >
          Weather
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/commodity"
          sx={{ fontSize: '16px', fontWeight: '500' }} // Adjust button font size and weight
        >
          Market Value
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/ff"
          sx={{ fontSize: '16px', fontWeight: '500' }} // Adjust button font size and weight
        >
          Farmer's Form
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/dashboard"
          sx={{ fontSize: '16px', fontWeight: '500' }} // Adjust button font size and weight
        >
          Dashboard
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/aboutus"
          sx={{ fontSize: '16px', fontWeight: '500' }} // Adjust button font size and weight
        >
          AboutUs
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
