import React from 'react';
import { Typography, Box } from '@mui/material';

function FarmerView() {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Farmer's Point of View
      </Typography>
      <Typography variant="body1">
        Insights and experiences from farmers.
      </Typography>
    </Box>
  );
}

export default FarmerView;
