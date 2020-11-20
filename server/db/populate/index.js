const mongoose = require('mongoose');
const config = require('../../config');
const { DB_CONNECT_PARAMS } = require('../../constants');
const model = require('./Model');

mongoose.connect(
  config.DB_URI, DB_CONNECT_PARAMS, async () => {
    console.log('Starting populating DB');
    await model.populate();
    await mongoose.connection.close();
    console.log('DB has been populate!');
  }
)
