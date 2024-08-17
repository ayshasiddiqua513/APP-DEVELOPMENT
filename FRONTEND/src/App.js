import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FarmerView from './components/FarmerView';
import AboutFlowers from './components/AboutFlowers';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs';
import AboutFruit from './components/AboutFruits';
import WeatherApp from './components/WeatherApp';
import CommodityPrices from './components/CommodityPrices';
import AboutVegetables from './components/AboutVegetables';
import AboutDairyproducts from './components/AboutDairyproducts';
import FarmersForm from './components/FarmersForm';
import FertilizersAndPesticides from './components/FertilizersAndPesticides';
import FarmingAndAgriculturalTools from './components/farmingAndAgriculturalTools';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer-view" element={<FarmerView />} />
          <Route path="/about-flowers" element={<AboutFlowers />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/about-fruits" element={<AboutFruit />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/commodity" element={<CommodityPrices />} />
          <Route path="/vegges" element={<AboutVegetables />} />
          <Route path="/dp" element={<AboutDairyproducts/>} />
          <Route path="/ff" element={<FarmersForm/>} />
          <Route path="/fp" element={<FertilizersAndPesticides/>} />
          <Route path="/fa" element={<FarmingAndAgriculturalTools/>} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;