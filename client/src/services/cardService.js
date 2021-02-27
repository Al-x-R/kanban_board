import API from './api';

const basePath = '/boards';

const cardService = {

  createCard: async (boardId, values) => {
    const { data } = await API.post(`${basePath}/${boardId}/cards`, values);
    return data;
  },

  getCards: async (boardId) => {
    const { data } = await API.get(`${basePath}/${boardId}/cards`);
    return data;
  },

  updateCard: (boardId, cardId, values) => API.patch(`${basePath}/${boardId}/cards/${cardId}`, values),

};

export default cardService;
