import Url from './url'

export default {
  async AllViews() {
    return await Url().get('/me')
  },
  async ViewsTarget(id) {
    return await Url().get('/me', id)
  },
  async updateMe(data) {
    return await Url().put(`me/update/${data.id}`, data.value, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
}

// axios#post(url[, data[, config]])
