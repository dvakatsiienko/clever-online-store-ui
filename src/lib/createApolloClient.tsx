/* Core */
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { createUploadLink } from 'apollo-upload-client';
import debug from 'debug';

/* Instruments */
import { allProductsPolicy } from './allProductsPolicy';
import { loggerLink } from './apollo-link-logger';
import { endpoint, prodEndpoint } from '@/../config';

const logGql = debug('[GraphQL error]');

export const createApolloClient = ({ headers, initialState }) => {
    return new ApolloClient({
        link: from([
            loggerLink,
            onError(net => {
                logGql('Operation:', net.operation);
                logGql('Response:', net.response);
                logGql(`Errors quantity: ${net.graphQLErrors?.length}`);

                if (net.graphQLErrors) {
                    for (const error of net.graphQLErrors) {
                        logGql(
                            `Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`,
                        );
                    }
                }

                if (net.networkError) {
                    logGql(`Network error: ${net.networkError}`);
                }
            }),

            createUploadLink({
                uri:
                    process.env.NODE_ENV === 'development'
                        ? endpoint
                        : prodEndpoint,
                fetchOptions: {
                    credentials: 'include',
                },
                headers,
            }),
        ]),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        allProducts: allProductsPolicy,
                    },
                },
            },
        }).restore(initialState || {}),
    });
};
