/* globals document */
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import apolloClient from './apollo';


render(
  (
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  ),
  document.getElementById('app'),
);
