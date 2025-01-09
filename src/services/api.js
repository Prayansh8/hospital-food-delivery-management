// src/services/api.js
import axios from 'axios';
import { config } from '../config';

const TOKEN_KEY = 'hospital_app_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const performLogin = async (credentials) => {
  try {
    const response = await axios.post(`${config.baseurl}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login failed', error);
    throw error;
  }
};

export const performSignup = async (signupData) => {
  try {
    const response = await axios.post(`${config.baseurl}/signup`, signupData);
    return response.data;
  } catch (error) {
    console.error('Signup failed', error);
    throw error;
  }
};

export const fetchUserInfo = async (token) => {
  try {
    const response = await axios.get(`${config.baseurl}/userinfo`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user info', error);
    throw error;
  }
};

// New Patient Management API Functions
export const fetchPatients = async () => {
  try {
    const response = await axios.get(`${config.baseurl}/patients`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching patients', error);
    throw error;
  }
};

export const savePatient = async (patient) => {
  try {
    const response = await axios.post(`${config.baseurl}/patients`, patient, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error saving patient', error);
    throw error;
  }
};