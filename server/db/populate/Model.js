const { docs, users } = require('./data');

const Doc = require('../../db/models/doc');
const User = require('../../db/models/user');

class Model {

  async cleanData() {
    await User.deleteMany({});
    await Doc.deleteMany({});
  }

  async addData() {
    await User.create(users);
    await Doc.create(docs);
  }

  async populate() {
    await this.cleanData();
    await this.addData();
  }
}

module.exports = new Model();
