// src/services/subscriptionService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/subscriptions'; // Replace with your json-server URL

export const addSubscription = (email) => {
  return axios.post(API_URL, { email });
};
