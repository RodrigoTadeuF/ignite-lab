import { ApolloClient, InMemoryCache,  } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osdap60y0901xs767q99uv/master',
  cache: new InMemoryCache()
})