// src/components/FlowerCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const FlowerCard = ({ flower }) => {
  return (
    <Card>
      <CardMedia 
        component="img" 
        height="250" 
        image={flower.image} 
        alt={flower.name} 
      />
      <CardContent>
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ fontWeight: 'bold', color: 'black' }}  // Apply bold and dark font color
        >
          {flower.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mostly Found In: {flower.region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Uses: {flower.uses}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Market Value: {flower.marketValue}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlowerCard;
