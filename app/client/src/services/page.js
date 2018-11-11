import Url from './url'

export default {
  async pageAllViews() {
    return await Url().get('/page')
  }
}

// axios#post(url[, data[, config]])
