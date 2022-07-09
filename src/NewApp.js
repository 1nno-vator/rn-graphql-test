import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import TempComp from './TempComp';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

const NewApp = () => {
  console.log('먼솔');
  return (
    <ApolloProvider client={client}>
      <TempComp />
    </ApolloProvider>
  );
};

export default NewApp;
