import API from './api';

const basePath = '/boards';

const activitiesService = {

  getBoardActivities: async (boardId) => {
    const { data } = await API.get(`${basePath}/${boardId}/activities`);
    return data
  },

  getCardActivities: async (boardId, cardId) => {
    const { data } = await API.get(`${basePath}/${boardId}/cards/${cardId}/activities`);
    return data;
  },
};

export default activitiesService;