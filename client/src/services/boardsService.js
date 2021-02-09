import API from './api'

const boardsService = {

  getBoards: () => {
    return API.get('/boards')
      .then(res => res.data)
  },

  createBoard: (data) => {
    return API.post('/boards', data)
  }
}

export default boardsService