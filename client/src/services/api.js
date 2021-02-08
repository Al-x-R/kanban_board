import axios from 'axios';
import store from '../store';
import { logoutRequest } from '../store/actions/authAction';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') ?? ''}`,
  },
});

API.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    if (err.response.status !== 401) {
      throw err;
    }

    if (typeof err.response.data.error.name !== 'undefined') {
      if (err.response.data.error.name === 'TokenExpiredError') {
        store.dispatch(logoutRequest());
        throw err;
      }
    }
  },
);

export default API;