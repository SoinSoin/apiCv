import Url from './url'

export default {
    create (values) {
      return Url().post('me/create',values)
    }
}

// axios#post(url[, data[, config]])