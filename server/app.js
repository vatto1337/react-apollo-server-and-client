// Dependencies
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cookieSession from 'cookie-session';

// Schemas & Resolvers
import User from './schemas/User';
import Product from './schemas/product';

// Apollo Server
const server = new ApolloServer({
  modules: [User, Product],
  context: ({ req }) => ({ session: req.session })
});

// Express App
const app = express();

// Cookie sessions 
app.use(cookieSession({
  name: 'session',
  keys: ['a', 'b',' c'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Cors 
let cors = {
  origin:['http://localhost:3000'],
  methods:['GET','POST'],
  credentials: true
}

// Applying middleware and starting
server.applyMiddleware({ app, cors: cors, path: '/' });
app.listen({ port: 4000 }, () => console.log(`GraphQL Server ready at http://localhost:4000`));