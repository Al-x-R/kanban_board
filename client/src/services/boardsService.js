import API from './api'

const boardsService = {

  getBoards: () => {
    return API.get('/boards')
      .then(res => res.data)
  }
}

export default boardsService