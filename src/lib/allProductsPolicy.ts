/* Core */
import { FieldPolicy } from '@apollo/client';

/* Instruments */
import * as gql from '@/graphql';

export const allProductsPolicy: FieldPolicy<
    readonly gql.Product[],
    readonly gql.Product[]
> = {
    keyArgs: false,
    read(existing = [], api) {
        const { args, cache } = api;
        const { skip, first } = args;

        const productsCountQuery = cache.readQuery<gql.ProductsCountQuery>({
            query: gql.ProductsCountDocument,
        });
        const count = productsCountQuery?._allProductsMeta?.count;
        const page = skip / first + 1;
        const pages = Math.ceil(count / first);

        const products = existing
            .slice(skip, skip + first)
            .filter(product => product);

        console.log('READ');
        console.log(existing);
        console.log(products);

        if (products.length && products.length !== first && page === pages) {
            // If There are items
            // AND there aren't enough items to satisfy how many were requested
            // AND we are on the last page
            // THEN JUST SEND IT

            return products;
        }
        if (products.length !== first) {
            // We don't have any items, we must go to the network to fetch them

            return void 0;
        }

        if (products.length) {
            // If there are items, just return them from the cache, and we don't need to go to the network

            return products;
        }

        return void 0; // fallback to network
    },
    merge(existing, incoming, api) {
        console.log('MERGE');
        console.log('existing', existing);
        console.log('incoming', incoming);

        const { args } = api;
        const { skip } = args;

        // This runs when the Apollo Client comes back from the network with our product.
        const merged = existing ? existing.slice(0) : [];

        for (let i = skip; i < skip + incoming.length; ++i) {
            merged[i] = incoming[i - skip];
        }

        console.log('merged', merged);

        return merged;
    },
};
