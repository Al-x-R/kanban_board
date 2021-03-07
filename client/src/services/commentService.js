import API from './api';

const basePath = '/boards';

const commentService = {

  addComment: async (boardId, cardId, values) => {
    const { data } = await API.post(`${basePath}/${boardId}/cards/${cardId}/comments`, values);
    console.log(data)
    return data
  },

  getComments: async (boardId, cardId) => {
    const { data } = await API.get(`${basePath}/${boardId}/cards/${cardId}/comments`);
    console.log(data)
    return data;
  },

  editComment: async (boardId, cardId, commentId, values) => {
    const { data } = await API.patch(`${basePath}/${boardId}/cards/${cardId}/comments/${commentId}`, values);
    return data;
  },

  removeComment: async (boardId, cardId, commentId) => {
    const { data } = await API.delete(`${basePath}/${boardId}/cards/${cardId}/comments/${commentId}`);
    return data;
  },
};

export default commentService;