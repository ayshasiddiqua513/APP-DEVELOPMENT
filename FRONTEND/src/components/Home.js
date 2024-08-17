import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const featuredProducts = [
  {
    title: "Veggies",
    description: "Fresh from the farm",
    image: "vege.jpeg",
    route: "/vegges",
  },
  {
    title: "Fruits",
    description: "Crisp and juicy apples",
    image: "apple.jpeg",
    route: "/about-fruits",
  },
  {
    title: "Dairy Products",
    description: "Rich and creamy milk",
    image: "milk.jpeg",
    route: "/dp",
  },
  {
    title: "Flowers",
    description: "Beautiful blooms",
    image: "flower.jpeg",
    route: "/about-flowers",
  },
  {
    title: "Fertilizers",
    description: "Natural fertilizers",
    image: "ferti.jpg",
    route: "/fp",
  },
  {
    title: "Agri Tools",
    description: "Sustainable Agricultural Tools",
    image: "ino.jpg",
    route: "/fa",
  },
];

const latestNews = [
  {
    title: "Eco-Friendly Rice Varieties",
    date: "August 09, 2024",
    description: "Rice Varieties Identified to Cut Fertilizer Use, Boosting Eco & Financial Benefits.",
    link: "https://www.downtoearth.org.in/agriculture/indian-scientists-identify-rice-varieties-that-can-reduce-fertiliser-use-reaping-environmental-financial-gains", // Add the link for redirection
  },
  {
    title: "NCDC’s loan schemes",
    date: "August 09, 2024",
    description: "Introducing a new range of organic productsTamil Nadu shows lack of interest in NCDC’s loan schemes",
    link: "https://www.thehindu.com/news/national/tamil-nadu/tamil-nadu-shows-lack-of-interest-in-ncdcs-loan-schemes/article68500575.ece", // Add the link for redirection
  },
];


const Home = () => {
  return (
    <Box
      style={{ color: 'black', padding: '20px' }}
      sx={{
        flexGrow: 1,
        padding: "20px",
        width: "100%", 
        color: '#2E7D32'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          paddingBottom: "40px",
        }}
      >
        <div>
          <Grid item xs={12} md={6}>
            <img
              src="https://www.shutterstock.com/image-photo/bunch-paddy-rice-field-before-600nw-2219469869.jpg"
              alt="Smart Harvest"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </div>
        <br/>
        <br/>

        {/* Featured Products */}
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to={product.route}
                    sx={{ mt: 2, backgroundColor: '#4CAF50', color: 'white' }}
                  >
                    Know More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
          <br/>
          <br/>
          <br/>
        <br/>
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Latest News
        </Typography>
        <Grid container spacing={2}>
          {latestNews.map((news, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    <RouterLink to={news.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {news.title}
                    </RouterLink>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {news.date}
                  </Typography>
                  <Typography variant="body1">{news.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default Home;
