const { docs, users, cards } = require('./data');

const Doc = require('../../db/models/doc');
const User = require('../../db/models/user');
const Card = require('../../db/models/card');

class Model {

  async cleanData() {
    await User.deleteMany({});
    await Doc.deleteMany({});
    await Card.deleteMany({});
  }

  async addData() {
    await User.create(users);
    await Doc.create(docs);
    await Card.create(cards);
  }

  async populate() {
    await this.cleanData();
    await this.addData();
  }
}

module.exports = new Model();
