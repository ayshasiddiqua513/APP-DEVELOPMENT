import React from 'react';

const OpenWeatherDashboard = () => {
  return (
    <div style={dashboardStyles.container}>
      <div style={dashboardStyles.content}>
        <h2 style={dashboardStyles.title}>Introducing OpenWeather Dashboard: our advanced tool for your business</h2>
        <p style={dashboardStyles.description}>
          OpenWeather presents you a comprehensive weather solution to get accurate and industry-specific weather forecasts, timely severe weather alerts, detailed weather overview, and expert consultations from OpenWeather professional meteorologists for informed decision-making, worldwide.
        </p>
        <div style={dashboardStyles.features}>
          <div style={dashboardStyles.feature}>
            <img src="path-to-your-icon.png" alt="Expert Consultations" style={dashboardStyles.icon} />
            <h3 style={dashboardStyles.featureTitle}>Expert Consultations</h3>
            <p style={dashboardStyles.featureDescription}>Personal consultations with meteorologists on topics relevant to you</p>
          </div>
          <div style={dashboardStyles.feature}>
            <img src="path-to-your-icon.png" alt="Tailored to your industry" style={dashboardStyles.icon} />
            <h3 style={dashboardStyles.featureTitle}>Tailored to your industry</h3>
            <p style={dashboardStyles.featureDescription}>Highly customizable solution to meet your requirements</p>
          </div>
          <div style={dashboardStyles.feature}>
            <img src="path-to-your-icon.png" alt="Global coverage" style={dashboardStyles.icon} />
            <h3 style={dashboardStyles.featureTitle}>Global coverage</h3>
            <p style={dashboardStyles.featureDescription}>Weather data for every corner of the globe to support your operations worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const dashboardStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
  },
  content: {
    maxWidth: '1200px',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '28px',
  },
  description: {
    color: '#555',
    marginBottom: '30px',
    fontSize: '18px',
    lineHeight: '1.6',
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
  },
  icon: {
    width: '60px',
    height: '60px',
  },
  featureTitle: {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  featureDescription: {
    color: '#666',
    fontSize: '16px',
  },
};

export default OpenWeatherDashboard;
