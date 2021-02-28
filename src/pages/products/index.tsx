/* Core */
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { merge } from 'webpack-merge';

/* Components */
import { ErrorMessage } from '@/components';
import { Layout } from '@/features/Layout';
import { Pagination } from '@/features/Pagination';
import { ProductCardList } from '@/features/Products';

/* Instruments */
import * as gql from '@/graphql';
import { withApollo } from '@/lib';

const ITEMS_PER_PAGE = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE);

const PaginatedProductsPage: gql.PageAllProductsComp = () => {
    const router = useRouter();
    const page = Number(router.query.page) as number;

    const allProductsQuery = gql.useAllProductsQuery({
        variables: {
            first: ITEMS_PER_PAGE,
            skip:  page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
        },
    });

    if (allProductsQuery.error) {
        return <ErrorMessage error = { allProductsQuery.error } />;
    }

    return (
        <Layout>
            <h1>Products</h1>
            <Pagination page = { page || 1 } />

            <ProductCardList
                allProductsQuery = { allProductsQuery.data }
                page = { page || 1 }
            />

            <Pagination page = { page || 1 } />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
    const page = ctx.query.page;
    console.log('SSR', page);

    const queries = await Promise.all([
        gql.ssrAllProducts.getServerPage({}, ctx),
        gql.ssrProductsCount.getServerPage({}, ctx),
        gql.ssrUser.getServerPage({}, ctx),
    ]);

    return merge(queries);
};

export default withApollo(PaginatedProductsPage);
