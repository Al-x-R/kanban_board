import API from './api'

const boardsService = {

  getBoards: () => {
    return API.get('/boards')
      .then(res => res.data)
  },

  createBoard: (data) => {
    return API.post('/boards', data)
  },

  getBoardById: (id) => {
    return API.get(`/board/${id}`)
      .then(res => res.data)
  },

  removeBoardById: (id) => {
    return API.delete(`/board/${id}`)
  }
}

export default boardsService