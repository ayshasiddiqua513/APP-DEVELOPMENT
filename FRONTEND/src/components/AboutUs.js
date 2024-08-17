import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

function AboutUs() {
  return (
    <Box className="about-us-container" sx={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
        About Us
      </Typography>
      
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="about-us-paper" sx={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Mission
            </Typography>
            <Typography variant="body1">
              We aim to empower farmers by providing the tools, resources, and support they need to cultivate high-quality produce while ensuring sustainable agricultural practices.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="about-us-paper" sx={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Vision
            </Typography>
            <Typography variant="body1">
              To become a leader in the agricultural sector by promoting innovation, sustainability, and community-focused growth.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="about-us-paper" sx={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Values
            </Typography>
            <Typography variant="body1">
              Integrity, sustainability, innovation, and community support are at the heart of everything we do.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '3rem', textAlign: 'center' }}>
        <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
          Founded in 2023, our organization has grown from a small group of passionate agriculturalists into a leading force in the industry. With a commitment to excellence and a dedication to sustainable practices, we have helped thousands of farmers improve their livelihoods and the quality of their produce.
        </Typography>
      </Box>

      <Box sx={{ marginTop: '3rem', textAlign: 'center' }}>
        <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
          Meet Our Team
        </Typography>
        <Typography variant="body1">
          Our team is composed of experienced professionals who are dedicated to supporting farmers and promoting sustainable agriculture. Each member of our team brings a wealth of knowledge and expertise to help our organization achieve its goals.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUs;
