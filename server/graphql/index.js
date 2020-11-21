const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');

const Doc = require('./models/Doc');
const User = require('./models/User');

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

    input SignUpInput {
      email: String!
      password: String!
      passwordConfirmation: String!
    }

    type Doc {
      title: String
      content: String
    }

    type Query {
      docs: [Doc]
    }

    type Mutation {
      signUp(input: SignUpInput): String
    }
  `;

  const resolvers = {
    Query: {
      docs: () => docs,
      docs: (_, __, { models: { Doc }}) => Doc.getAll(),
    },
    Mutation: {
      signUp: (_, { input }, { models: { User }}) => {
        return User.signUp(input);
      },
    }
  };

  const apolloServer = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        Doc: new Doc(mongoose.model('Doc')),
        User: new User(mongoose.model('User')),
      }
    })
  });

  return apolloServer;
}
