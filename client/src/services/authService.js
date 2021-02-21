import API from './api';

const AuthService = {

  login: (data) => {
    return API.post('/login', data)
      .then(({ data }) => {
        setHeadersToLocalStorage(data);
        return data;
      })
      .catch(err => {
        console.log('Auth service error', err);
        // throw err
      });
  },

  register: async (values) => {
    const {data} = await API.post('/register', values)
    setHeadersToLocalStorage(data);
    return data;
  },

  logout: () => {
    API.defaults.headers['Authorization'] = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('boards');
  },

};

const setHeadersToLocalStorage = ({ user, token }) => {
  API.defaults.headers['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

export default AuthService;