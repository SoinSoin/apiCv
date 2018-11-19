import Url from './url'

export default {
  async AllViews() {
    return await Url().get('/page')
  }
}

// axios#post(url[, data[, config]])
