const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: 'Email is required!',
    lowercase: true,
    index: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    minlength: [6, 'Minimum length is 6 characters!'],
    maxlength: [32, 'Maximum length is 32 characters!'],
    required: true
  },
  role: {
    type: String,
    enum: ['guest', 'admin'],
    required: true,
    default: "guest"
  },
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) { next(err) }

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) { next(err) }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.validatePassword = function(candidatePassword, done) {
  bcrypt.compare(candidatePassword, this.password, function(error, isSuccess) {
    if (error) { return done(error) }

    done(null, isSuccess);
  });
}

module.exports = mongoose.model('User', userSchema);
