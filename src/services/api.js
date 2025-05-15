import axios from 'axios';

const API = axios.create({
  baseURL: 'https://ai-meal-planner-backend-esch.onrender.com'
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
export const signupUser = async (data) => {
  try {
    const response = await API.post('/signup', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await API.post('/login', data);
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
export const chatWithBot = (message) => API.post('/chatbot', { message });

// Logout helper
export const logout = () => {
  localStorage.removeItem('token');
  delete API.defaults.headers.common['Authorization'];
};

export default API;
