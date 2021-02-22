import API from './api';

const cardService = {

  createCard: async (values) => {
    return await API.post('/card', values);
  },

  getCards: async (id) => {
    const { data } = await API.get(`/card/${id}`);
    return data;
  },

};

export default cardService;