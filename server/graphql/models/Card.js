class Card {

  constructor(model, user) {
    this.Model = model;
    this.user = user;
    this.writeRights = ['admin', 'guest'];
  }

  getAll() {
    return this.Model.find({})
  }

  getAllByUser() {
    this._checkAuth();

    return this.Model.find({ user: this.user._id}).sort({ startDate: 'desc' })
  }

  _checkAuth() {
    if (!this.user || !this.writeRights.includes(this.user.role)) {
      throw new Error('Not Authorize');
    }
  }
}

module.exports = Card;
