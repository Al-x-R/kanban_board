import API from './api';

const boardsService = {

  getBoards: async () => {
    const { data } = await API.get('/boards');
    return data;
  },

  createBoard: async (values) => {
    const { data } = await API.post('/boards', values);
    return data;
  },

  getBoardById: async (boardId) => {
    const { data } = await API.get(`/boards/${boardId}`);
    return data;
  },

  removeBoardById: (boardId) => API.delete(`/boards/${boardId}`),
};

export default boardsService;
