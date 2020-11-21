const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');

const { buildAuthContext } = require('./context');

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

    input SignInInput {
      email: String!
      password: String!
    }

    type Doc {
      title: String
      content: String
    }

    type User {
      _id: ID
      email: String
      role: String
    }

    type Query {
      docs: [Doc]
    }

    type Mutation {
      signUp(input: SignUpInput): String
      signIn(input: SignInInput): User
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
      signIn: (_, { input }, ctx) => {
        return ctx.models.User.signIn(input, ctx);
      },
    }
  };

  const apolloServer = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      ...buildAuthContext(req),
      models: {
        Doc: new Doc(mongoose.model('Doc')),
        User: new User(mongoose.model('User')),
      }
    })
  });

  return apolloServer;
}
