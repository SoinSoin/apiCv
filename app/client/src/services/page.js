import Url from './url'

export default {
  async AllViews() {
    return await Url().get('/page')
  },
  async ViewsTarget(id) {
    return await Url().get(`/page/${id}`)
  },
  async updateAddPage(data) {
    return await Url().put(`page/update/${data.id}`, data.value, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    })
  },
  async updateRmPage(data) {
    return await Url().put(`page/update/${data.idPage}/${data.idContent}`)
  },
  async createPage(data) {
    return await Url().post(`page/create`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  },
  async deletePage(id) {
    return await Url().delete(`page/delete/${id}`)
  }
}

// axios#post(url[, data[, config]])
