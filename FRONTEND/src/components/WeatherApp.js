// // src/components/WeatherApp.js
// import React, { useState } from 'react';

// const WeatherApp = () => {
//   const [city, setCity] = useState('');
//   const [weatherInfo, setWeatherInfo] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   const getWeather = () => {
//     const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.cod === 200) {
//           setWeatherInfo({
//             name: data.name,
//             country: data.sys.country,
//             temp: data.main.temp,
//             description: data.weather[0].description,
//           });
//           setErrorMessage('');
//         } else {
//           setWeatherInfo(null);
//           setErrorMessage(`Error: ${data.message}`);
//         }
//       })
//       .catch((error) => {
//         setWeatherInfo(null);
//         setErrorMessage(`Error: ${error.message}`);
//       });
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Weather App</h2>
//       <input 
//         type="text" 
//         placeholder="Enter city name" 
//         value={city} 
//         onChange={(e) => setCity(e.target.value)} 
//         style={styles.input}
//       />
//       <button onClick={getWeather} style={styles.button}>Get Weather</button>
//       <div style={styles.weatherInfo}>
//         {weatherInfo && (
//           <div>
//             <p><strong>City:</strong> {weatherInfo.name}, {weatherInfo.country}</p>
//             <p><strong>Temperature:</strong> {weatherInfo.temp} °C</p>
//             <p><strong>Weather:</strong> {weatherInfo.description}</p>
//           </div>
//         )}
//       </div>
//       <div style={styles.errorMessage}>
//         {errorMessage && <p>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     fontFamily: 'Arial, sans-serif',
//   },
//   input: {
//     marginRight: '10px',
//     padding: '5px',
//   },
//   button: {
//     padding: '5px 10px',
//     cursor: 'pointer',
//   },
//   weatherInfo: {
//     marginTop: '20px',
//   },
//   errorMessage: {
//     color: 'red',
//   },
// };

// export default WeatherApp;


// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faCloud, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

// const WeatherApp = () => {
//   const [city, setCity] = useState('');
//   const [weatherInfo, setWeatherInfo] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

//   const getWeather = () => {
//     const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.cod === 200) {
//           setWeatherInfo({
//             name: data.name,
//             country: data.sys.country,
//             temp: data.main.temp,
//             description: data.weather[0].description,
//             icon: data.weather[0].main,
//           });
//           setErrorMessage('');
//         } else {
//           setWeatherInfo(null);
//           setErrorMessage(`Error: ${data.message}`);
//         }
//       })
//       .catch((error) => {
//         setWeatherInfo(null);
//         setErrorMessage(`Error: ${error.message}`);
//       });
//   };

//   const getWeatherIcon = (icon) => {
//     switch (icon) {
//       case 'Clear':
//         return <FontAwesomeIcon icon={faSun} size="4x" color="#FFD700" />;
//       case 'Clouds':
//         return <FontAwesomeIcon icon={faCloud} size="4x" color="#B0C4DE" />;
//       case 'Rain':
//         return <FontAwesomeIcon icon={faCloudRain} size="4x" color="#4682B4" />;
//       case 'Snow':
//         return <FontAwesomeIcon icon={faSnowflake} size="4x" color="#FFFFFF" />;
//       default:
//         return null;
//     }
//   };

//   const toggleUnit = () => {
//     setUnit(unit === 'metric' ? 'imperial' : 'metric');
//   };

//   return (
//     <div>

//       <div style={styles.container}>
//         <h2 style={styles.title}>Weather App</h2>
//         <input 
//           type="text" 
//           placeholder="Enter city name" 
//           value={city} 
//           onChange={(e) => setCity(e.target.value)} 
//           style={styles.input}
//         />
//         <div style={styles.buttonContainer}>
//           <button onClick={getWeather} style={styles.button}>Get Weather</button>
//           <button onClick={toggleUnit} style={styles.unitButton}>
//             {unit === 'metric' ? 'Change to °F' : 'Change to °C'}
//           </button>
//         </div>
//         <div style={styles.weatherInfo}>
//           {weatherInfo && (
//             <div style={styles.weatherDetails}>
//               {getWeatherIcon(weatherInfo.icon)}
//               <p><strong>City:</strong> {weatherInfo.name}, {weatherInfo.country}</p>
//               <p><strong>Temperature:</strong> {weatherInfo.temp} {unit === 'metric' ? '°C' : '°F'}</p>
//               <p><strong>Weather:</strong> {weatherInfo.description}</p>
//             </div>
//           )}
//         </div>
//         <div style={styles.errorMessage}>
//           {errorMessage && <p>{errorMessage}</p>}
//         </div>
//       <div style={dashboardStyles.container}>
//         <h2 style={dashboardStyles.title}>Introducing OpenWeather Dashboard: our advanced tool for your business</h2>
//         <p style={dashboardStyles.description}>
//           OpenWeather presents you a comprehensive weather solution to get accurate and industry-specific weather forecasts, timely severe weather alerts, detailed weather overview, and expert consultations from OpenWeather professional meteorologists for informed decision-making, worldwide.
//         </p>
//         <div style={dashboardStyles.features}>
//           <div style={dashboardStyles.feature}>
//             <img src="path-to-your-icon.png" alt="Expert Consultations" style={dashboardStyles.icon} />
//             <h3 style={dashboardStyles.featureTitle}>Expert Consultations</h3>
//             <p style={dashboardStyles.featureDescription}>Personal consultations with meteorologists on topics relevant to you</p>
//           </div>
//           <div style={dashboardStyles.feature}>
//             <img src="path-to-your-icon.png" alt="Tailored to your industry" style={dashboardStyles.icon} />
//             <h3 style={dashboardStyles.featureTitle}>Tailored to your industry</h3>
//             <p style={dashboardStyles.featureDescription}>Highly customisable solution to meet your requirements</p>
//           </div>
//           <div style={dashboardStyles.feature}>
//             <img src="path-to-your-icon.png" alt="Global coverage" style={dashboardStyles.icon} />
//             <h3 style={dashboardStyles.featureTitle}>Global coverage</h3>
//             <p style={dashboardStyles.featureDescription}>Weather data for every corner of the globe to support your operations worldwide</p>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: '#f8f9fa',
//     padding: '40px',
//     borderRadius: '15px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     fontFamily: 'Arial, sans-serif',
//     maxWidth: '600px',
//     margin: 'auto',
//     textAlign: 'center',
//     width: '100%',
//   },
//   title: {
//     color: '#333',
//     marginBottom: '20px',
//     fontWeight: 'bold',
//     fontSize: '24px',
//   },
//   input: {
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     marginBottom: '10px',
//     width: '70%',
//     fontSize: '16px',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px',
//     marginBottom: '20px',
//   },
//   button: {
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     fontSize: '16px',
//   },
//   unitButton: {
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#6c757d',
//     color: '#fff',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     fontSize: '16px',
//   },
//   weatherInfo: {
//     marginTop: '20px',
//   },
//   weatherDetails: {
//     fontSize: '20px',
//     color: '#333',
//   },
//   errorMessage: {
//     color: '#dc3545',
//     marginTop: '20px',
//   },
// };

// const dashboardStyles = {
//   container: {
//     backgroundColor: '#ffffff',
//     padding: '40px',
//     borderRadius: '15px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     fontFamily: 'Arial, sans-serif',
//     maxWidth: '800px',
//     margin: 'auto',
//     textAlign: 'center',
//     width: '100%',
//   },
//   title: {
//     color: '#333',
//     marginBottom: '20px',
//     fontWeight: 'bold',
//     fontSize: '24px',
//   },
//   description: {
//     color: '#666',
//     marginBottom: '40px',
//     fontSize: '16px',
//   },
//   features: {
//     display: 'flex',
//     justifyContent: 'space-around',
//   },
//   feature: {
//     textAlign: 'center',
//     width: '30%',
//   },
//   icon: {
//     width: '50px',
//     height: '50px',
//     marginBottom: '20px',
//   },
//   featureTitle: {
//     color: '#333',
//     fontWeight: 'bold',
//     fontSize: '18px',
//     marginBottom: '10px',
//   },
//   featureDescription: {
//     color: '#666',
//     fontSize: '14px',
//   },
// };

// export default WeatherApp;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './WeatherApp.css'; // Import the CSS file


const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  const getWeather = () => {
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherInfo({
            name: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].main,
          });
          setErrorMessage('');
        } else {
          setWeatherInfo(null);
          setErrorMessage(`Error: ${data.message}`);
        }
      })
      .catch((error) => {
        setWeatherInfo(null);
        setErrorMessage(`Error: ${error.message}`);
      });
  };

  const getWeatherIcon = (icon) => {
    switch (icon) {
      case 'Clear':
        return <FontAwesomeIcon icon={faSun} size="4x" color="#FFD700" />;
      case 'Clouds':
        return <FontAwesomeIcon icon={faCloud} size="4x" color="#B0C4DE" />;
      case 'Rain':
        return <FontAwesomeIcon icon={faCloudRain} size="4x" color="#4682B4" />;
      case 'Snow':
        return <FontAwesomeIcon icon={faSnowflake} size="4x" color="#FFFFFF" />;
      default:
        return null;
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="weather-app" id="helper">
      <header className="app-bar">
        <h1 className="app-bar-title">Weather Forecast</h1>
      </header>
      <div className="hero-image">
        <div className="hero-content">
          <h2 className="hero-title">Your Weather Dashboard</h2>
          <p className="hero-description">Get accurate and up-to-date weather information right at your fingertips.</p>
          <div className="hero-buttons">
            <button className="hero-button" onClick={() => window.scrollTo(0, document.querySelector('.weather-info').offsetTop)}>Get Weather</button>
            <button className="hero-button">More Info</button>
          </div>
        </div>
      </div>
      <div className="weather-info">
        <h2 className="weather-title">Know the Weather</h2>
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          className="weather-input"
        />
        <div className="button-container">
          <button onClick={getWeather} className="button">Get Weather</button>
          <button onClick={toggleUnit} className="unit-button">
            {unit === 'metric' ? 'Change to °F' : 'Change to °C'}
          </button>
        </div>
        <div className="weather-details">
          {weatherInfo && (
            <div className="weather-details-info">
              {getWeatherIcon(weatherInfo.icon)}
              <p><strong>City:</strong> {weatherInfo.name}, {weatherInfo.country}</p>
              <p><strong>Temperature:</strong> {weatherInfo.temp} {unit === 'metric' ? '°C' : '°F'}</p>
              <p><strong>Weather:</strong> {weatherInfo.description}</p>
            </div>
          )}
        </div>
        <div className="error-message">
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
