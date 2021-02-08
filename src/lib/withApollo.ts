/* Core */
import { getDataFromTree } from '@apollo/react-ssr';
import createWithApollo from 'next-with-apollo';

/* Instruments */
import { createApolloClient } from './createApolloClient';

export const withApollo = createWithApollo(createApolloClient, {
    getDataFromTree,
});
