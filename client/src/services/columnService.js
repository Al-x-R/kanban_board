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

  updateColumn: async (id, values) => {
    console.log(values)
    return await API.patch(`/column/${id}`, values)
}
};

export default columnService;