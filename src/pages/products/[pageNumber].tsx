/* Core */
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { merge } from 'webpack-merge';

/* Components */
import { ErrorMessage } from '@/components';
import { Layout } from '@/features/Layout';
import { Pagination } from '@/features/Pagination';
import { Products } from '@/features/Products';

/* Instruments */
import * as gql from '@/graphql';
import { withApollo } from '@/lib';

const ITEMS_PER_PAGE = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE);

const PaginatedProductsPage: gql.PageAllProductsComp = () => {
    const router = useRouter();
    const pageNumber = Number(router.query.pageNumber) as number;

    const allProductsQuery = gql.useAllProductsQuery({
        variables: {
            first: ITEMS_PER_PAGE,
            skip:  pageNumber * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
        },
    });

    if (allProductsQuery.error) {
        return <ErrorMessage error = { allProductsQuery.error } />;
    }

    return (
        <Layout>
            <h1>Products</h1>
            <Pagination pageNumber = { pageNumber || 1 } />
            {allProductsQuery.loading ? (
                <h1>Loading...</h1>
            ) : (
                <Products
                    allProductsQuery = { allProductsQuery.data }
                    pageNumber = { pageNumber || 1 }
                />
            )}
            <Pagination pageNumber = { pageNumber || 1 } />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
    const [ productsQuery, productsCountQuery, userQuery ] = await Promise.all([
        gql.ssrAllProducts.getServerPage({}, ctx),
        gql.ssrProductsCount.getServerPage({}, ctx),
        gql.ssrUser.getServerPage({}, ctx),
    ]);

    return merge(productsQuery, productsCountQuery, userQuery);
};

export default withApollo(PaginatedProductsPage);
