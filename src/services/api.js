import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    console.error('API Error:', message);
    return Promise.reject(error);
  }
);

// Auth endpoints
export const signupUser = async (userData) => {
  try {
    const response = await API.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await API.post('/login', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      API.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Meal endpoints
export const getMeals = async () => {
  try {
    const response = await API.get('/getMeals');
    return response.data;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
};

// Logout helper
export const logout = () => {
  localStorage.removeItem('token');
  delete API.defaults.headers.common['Authorization'];
};

export default API;