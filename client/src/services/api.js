import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
  },
});

export default API;