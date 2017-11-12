import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apolloConfig = {
  link: new HttpLink({
    uri: 'http://locahost:3000/graphql',
  }),
  cache: new InMemoryCache(),
};

export default new ApolloClient(apolloConfig);
