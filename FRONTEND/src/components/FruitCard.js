import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

// FruitCard component
const FruitCard = ({ name, region, uses, marketValue, image }) => {
  if (!image) {
    return null;
  }

  return (
    <Card>
      <CardMedia 
        component="img" 
        height="140" 
        image={image} 
        // alt={name || 'Unknown Fruit'}
      />
      <CardContent>
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ fontWeight: 'bold', color: 'black' }} 
        >
          {name || 'Unknown Name'} // Provide a fallback text
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mostly Found In: {region || 'Unknown Region'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Uses: {uses || 'Unknown Uses'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Market Value: {marketValue || 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FruitCard;
