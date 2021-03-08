import API from './api';

const basePath = '/boards';

const commentService = {

  addComment: async (boardId, cardId, values) => {
    const { data } = await API.post(`${basePath}/${boardId}/cards/${cardId}/comments`, values);
    return data;
  },

  getComments: async (boardId, cardId) => {
    const { data } = await API.get(`${basePath}/${boardId}/cards/${cardId}/comments`);
    return data;
  },

  editComment: async (boardId, cardId, commentId, values) => {
    const { data } = await API.patch(`${basePath}/${boardId}/cards/${cardId}/comments/${commentId}`, values);
    return data;
  },

  removeComment: async (boardId, cardId, commentId) => {
    await API.delete(`${basePath}/${boardId}/cards/${cardId}/comments/${commentId}`);
  },
};

export default commentService;