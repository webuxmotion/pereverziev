const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');

const Doc = require('./models/Doc');

exports.createApolloServer = () => {

  const docs = [
    {
      title: 'The Awakening',
      content: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      content: 'Paul Auster',
    },
  ];

  const typeDefs = gql`

    type Doc {
      title: String
      content: String
    }

    type Query {
      docs: [Doc]
    }
  `;

  const resolvers = {
    Query: {
      docs: () => docs,
      docs: (_, __, { models: { Doc }}) => Doc.getAll(),
    },
  };

  const apolloServer = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        Doc: new Doc(mongoose.model('Doc')),
      }
    })
  });

  return apolloServer;
}
