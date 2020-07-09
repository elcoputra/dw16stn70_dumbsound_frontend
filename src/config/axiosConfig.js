import axios from 'axios';

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  // baseURL: process.env.REACT_APP_BASE_URL_ONLINE,
});

// Alter defaults after instance has been created
export const setAuthToken = (token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
