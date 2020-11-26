const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

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
      email: "writer@gmail.com",
      password: "writer@gmail.com",
      role: "writer"
    },
    {
      _id: user3Id,
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
  cards: [
    {
      title: 'Card title 1',
      user: user1Id
    },
    {
      title: 'Card title 2',
      content: 'Card content 2',
      user: user1Id
    },
    {
      title: 'Card title 3',
      link: 'Card link 3',
      user: user3Id
    },
    {
      title: 'The Conquest of Happiness by Russell',
      content: 'The Conquest of Happiness is Bertrand Russell‘s recipe for good living. First published in 1930',
      link: 'https://www.amazon.com/Conquest-Happiness-Bertrand-Russell-ebook/dp/B0178KCA3E',
      user: user2Id
    },
  ],
}

module.exports = data;
