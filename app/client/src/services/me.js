import Url from './url'

export default {
  async AllViews() {
    return await Url().get('/me')
  },
  async ViewsTarget(id) {
    return await Url().get(`/me/${id}`)
  },
  async updateMe(data) {
    return await Url().put(`me/update/${data.id}`, data.value, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    })
  },
  async createMe(data) {
    return await Url().post(`me/create`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  },
  async deleteMe(id) {
    return await Url().delete(`me/delete/${id}`)
  }
}

// axios#post(url[, data[, config]])
