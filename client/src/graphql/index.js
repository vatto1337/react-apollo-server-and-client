import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({ 
  uri: 'http://localhost:4000',
  credentials: "include"
});

export default (props) => (<ApolloProvider client={client}>{props.children}</ApolloProvider>)


