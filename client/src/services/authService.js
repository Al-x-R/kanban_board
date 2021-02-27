import API from './api';

const AuthService = {

  login: async (values) => {
    const { data } = await API.post('/login', values);
    setHeadersToLocalStorage(data);
    return data;
  },

  register: async (values) => {
    const { data } = await API.post('/register', values);
    setHeadersToLocalStorage(data);
    return data;
  },

  logout: () => {
    API.defaults.headers['Authorization'] = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

};

const setHeadersToLocalStorage = ({ user, token }) => {
  API.defaults.headers['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

export default AuthService;
