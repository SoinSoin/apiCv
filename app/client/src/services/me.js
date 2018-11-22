import Url from './url'

export default {
  async AllViews() {
    return await Url().get('/me')
  },
  async ViewsTarget(id) {
    return await Url().get('/me',id)
  }
}

// axios#post(url[, data[, config]])
