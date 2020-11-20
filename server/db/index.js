const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const config = require('../config');
const { DB_CONNECT_PARAMS } = require('../constants');

exports.connect = () => {
  mongoose.connect(config.DB_URI, DB_CONNECT_PARAMS, () => {
    console.log('Connected to DB!');
  })
}

exports.initSessionStore = () => {
  const store = new MongoDBStore({
    uri: config.DB_URI,
    collection: 'sessionStore'
  });

  return store;
}
