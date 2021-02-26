/* Core */
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { merge } from 'webpack-merge';

/* Components */
import { UpdateProductForm } from '@/components';
import { Layout } from '@/features/Layout';

/* Instruments */
import * as gql from '@/graphql';
import { withApollo } from '@/lib';

const UpdatePage = props => {
    const router = useRouter();
    const productId = router.query.productId as string;
    const userQuery = gql.useUserQuery();

    console.log();

    if (!userQuery.data?.authenticatedItem) {
        if (process.browser) {
            router.replace('/login');
        }
        return null;
    }

    return (
        <Layout>
            <UpdateProductForm productId = { productId } />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
    const productId = ctx.query.productId as string;

    const [ userQuery, productQuery ] = await Promise.all([
        gql.ssrUser.getServerPage({}, ctx),
        gql.ssrProduct.getServerPage({ variables: { id: productId } }, ctx),
    ]);

    return merge(userQuery, productQuery);
};

export default withApollo(UpdatePage);
