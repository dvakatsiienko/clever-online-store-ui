/* Core */
import { NextPage } from 'next';
import {
    ApolloClient,
    NormalizedCacheObject,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';

export const withApollo = (Comp: NextPage) => (props: any) => {
    return (
        <ApolloProvider client = { getApolloClient(null, props.apolloState) }>
            <Comp />
        </ApolloProvider>
    );
};

export const getApolloClient = (
    ctx?: any,
    initialState?: NormalizedCacheObject,
) => {
    const httpLink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_DEV_GQL_URL,
        fetch,
    });
    const cache = new InMemoryCache().restore(initialState || {});
    return new ApolloClient({
        link: httpLink,
        cache,
    });
};
