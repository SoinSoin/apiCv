import Url from './url'

export default {
  async meAllViews() {
    return await Url().get('/me')
  }
}

// axios#post(url[, data[, config]])
