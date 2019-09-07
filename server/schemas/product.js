import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    product(id: ID!) : Product
    products: [Product]
  }
  
  type Product {
    id: ID!
    title: String!
    price: Int!
    description: String!
  }
  
`;

const resolvers = {
  Query: {
    product(_, args) {
      return ({
        id: args.id,
        title: 'Product title',
        description: 'Product description',
        price: 500
      })
    },
    products() {
      return ([
        { id: 0 , title: 'Product title', description: 'Product description', price: 5000 },
        { id: 1 , title: 'Product title', description: 'Product description', price: 5000 },
        { id: 2 , title: 'Product title', description: 'Product description', price: 5000 }
      ])
    }
  }
}

export default { typeDefs, resolvers }