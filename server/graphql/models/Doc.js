class Doc {

  constructor(model) {
    this.Model = model;
  }

  getAll() {
    return this.Model.find({})
  }
}

module.exports = Doc;
