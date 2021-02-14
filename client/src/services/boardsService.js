import API from './api';

const boardsService = {

  getBoards: () => {
    return API.get('/boards')
      .then(res => res.data);
  },

  createBoard: (data) => {
    return API.post('/boards', data);
  },

  getBoardById: (id) => {
    return API.get(`/boards/${id}`)
      .then(res => res.data);
  },

  removeBoardById: (id) => {
    return API.delete(`/boards/${id}`);
  },
};

export default boardsService;