import API from './api'

const cardService = {

  createCard: (data) => {
    return API.post('/card', data)
  },

  getCards: (id) => {
    return API.get(`/card/${id}`)
  }

}

export default cardService