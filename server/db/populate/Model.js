const { docs } = require('./data');

const Doc = require('../../db/models/doc');

class Model {

  async cleanData() {
    await Doc.deleteMany({});
  }

  async addData() {
    await Doc.create(docs);
  }

  async populate() {
    await this.cleanData();
    await this.addData();
  }
}

module.exports = new Model();
