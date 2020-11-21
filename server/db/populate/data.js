const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const data = {
  users: [
    {
      _id: user1Id,
      email: "admin@gmail.com",
      password: "admin@gmail.com",
      role: "admin"
    },
    {
      _id: user2Id,
      email: "guest@gmail.com",
      password: "guest@gmail.com",
      role: "guest"
    },
  ],
  docs: [
    {
      title: 'Doc title 1',
      content: 'Doc content 1',
      user: user1Id
    },
    {
      title: 'Doc title 2',
      content: 'Doc content 2',
      user: user1Id
    },
    {
      title: 'Doc title 3',
      content: 'Doc content 3',
      user: user2Id
    },
  ],
}

module.exports = data;
