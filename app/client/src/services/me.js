import Url from './url'

export default {
  async AllViews() {
    return await Url().get('/me')
  }
}

// axios#post(url[, data[, config]])
