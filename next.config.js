const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  env: {
    BASE_URL: isDev ? 'http://localhost:1991/graphql' : 'https://pereverziev.herokuapp.com/graphql'
  }
}
