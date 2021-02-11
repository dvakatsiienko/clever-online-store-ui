/* Core */
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { createUploadLink } from 'apollo-upload-client';
import debug from 'debug';

/* Instruments */
import { allProductsPolicy } from './fieldPolicies';
import { loggerLink } from './links';

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
                uri: __DEV__
                    ? process.env.NEXT_PUBLIC_DEV_GQL_URL
                    : process.env.NEXT_PUBLIC_PROD_GQL_URL,
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
