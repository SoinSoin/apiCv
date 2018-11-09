import Url from './url'

export default {
   meAllViews (values) {
      return Url().get('me',values)
    }
}

// axios#post(url[, data[, config]])