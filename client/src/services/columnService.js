import API from './api';

const columnService = {

  createColumn: (data) => {
    return API.post('/column', data);
  },

  getColumns: (id) => {
    return API.get(`/column/${id}`)
      // .then(res => res.data);
  },

};

export default columnService;