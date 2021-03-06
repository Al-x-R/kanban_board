import API from './api';

const basePath = '/boards';

const commentService = {

  addComment: async (boardId, cardId) => {
    const { data } = await API.get(`${basePath}/${boardId}/cards/${cardId}/comments`);
    return data
  },

  getComment: async (boardId, cardId) => {
    const { data } = await API.get(`${basePath}/${boardId}/cards/${cardId}/comments`);
    return data;
  },
};

export default commentService;