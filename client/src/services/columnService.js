import API from './api';

const columnService = {

  createColumn: async (values) => {
    return await API.post('/column', values);
  },

  getColumns: async (id) => {
    const { data } = await API.get(`/column/${id}`);
    return data;
  },

  removeColumn: async (id) => {
    return await API.delete(`/column/${id}`);
  },
};

export default columnService;