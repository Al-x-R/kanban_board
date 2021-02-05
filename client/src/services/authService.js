import API from './api';

const AuthService = {

  login: (data) => {
    return API.post('/login', data)
      .then(({ data }) => {
        console.log(data.user)
        API.defaults.headers['Authorization'] = `Bearer ${data.token}`
        return data;
      })
      .catch(err => {
        console.log('Auth service error', err);
        throw err
      });
  },

};



export default AuthService;