// Dashboard.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardHeader, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for chart.js

const data = {
  labels: ['Fruits', 'Vegetables', 'Dairy Products', 'Meats', 'Eggs'],
  datasets: [
    {
      label: 'Market Value ($)',
      data: [5000, 7000, 3000, 8000, 2000], // Sample data
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Market Value Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Market Value Overview" />
            <CardContent>
              <Bar
                data={data}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    tooltip: {
                      callbacks: {
                        label: function (context) {
                          return `${context.label}: $${context.raw}`;
                        },
                      },
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Detailed Market Values" />
            <CardContent>
              <Typography variant="h6">Fruits: $5000</Typography>
              <Typography variant="h6">Vegetables: $7000</Typography>
              <Typography variant="h6">Dairy Products: $3000</Typography>
              <Typography variant="h6">Meats: $8000</Typography>
              <Typography variant="h6">Eggs: $2000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
