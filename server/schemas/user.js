import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    user(id: ID!) : User
    users: [User]
  }
  
  type User {
    id: ID!
    username: String!
    password: String!
  }

`;

const resolvers = {
  Query: {
    user(_, args, context) {
      // if(!context.session.user) return null;
      return ({
        id: args.id,
        username: 'Username',
        password: 'Password'
      })
    },
    users() {
      return ([
        { id: 0 , username: 'John Doe', password: 'test' },
        { id: 1 , username: 'John Doe', password: 'test' },
        { id: 2 , username: 'John Doe', password: 'test' }
      ])
    }
  }
}

export default { typeDefs, resolvers }