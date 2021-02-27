import API from './api';

const basePath = '/boards';

const columnService = {

  createColumn: async (boardId, values) => {
    const { data } = await API.post(`${basePath}/${boardId}/columns`, values);
    return data;
  },

  getColumns: async (boardId) => {
    const { data } = await API.get(`${basePath}/${boardId}/columns`);
    return data;
  },

  removeColumn: (boardId, columnId) => API.delete(`${basePath}/${boardId}/columns/${columnId}`),

  updateColumn: (boardId, columnId, values) => API.patch(`${basePath}/${boardId}/columns/${columnId}`, values),
};

export default columnService;