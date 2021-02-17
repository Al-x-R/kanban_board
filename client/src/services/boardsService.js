import API from './api';

const boardsService = {

  getBoards: () => {
    return API.get('/boards')
      .then(({data}) => {
        localStorage.setItem('boards', JSON.stringify(data));
        return data
      })
  },

  createBoard: (data) => {
    return API.post('/boards', data);
  },

  getBoardById: (id) => {
    return API.get(`/boards/${id}`)
      .then(({data}) => {
        localStorage.setItem('board', JSON.stringify(data));
        return data
      })
  },

  removeBoardById: (id) => {
    return API.delete(`/boards/${id}`);
  },
};

export default boardsService;