import API from './api';

const boardsService = {

  getBoards: async () => {
    const { data } = await API.get('/boards');
    return data;
  },

  createBoard: async (data) => {
    return await API.post('/boards', data);
  },

  getBoardById: async (id) => {
    const { data } = await API.get(`/boards/${id}`);
    return data;
  },

  removeBoardById: async (id) => {
    return await API.delete(`/boards/${id}`);
  },
};

export default boardsService;
