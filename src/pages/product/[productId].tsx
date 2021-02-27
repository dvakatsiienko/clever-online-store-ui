/* Core */
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

/* Instruments */
import * as gql from '@/graphql';
import { withApollo } from '@/lib';

/* Components */
import { ErrorMessage } from '@/components';
import { Layout } from '@/features/Layout';

const ProductPage: NextPage = () => {
    const router = useRouter();
    const productId = router.query.productId as string;

    const productQuery = gql.useProductQuery({ variables: { id: productId } });
    const { data } = productQuery;

    if (productQuery.error) {
        return <ErrorMessage error = { productQuery.error } />;
    }

    return (
        <Layout>
            <ProductStyles>
                <Head>
                    <title>Clever | {data?.Product.name}</title>
                </Head>

                <img
                    alt = { data?.Product.photo.altText }
                    src = { data?.Product.photo.image.publicUrlTransformed }
                />

                <div className = 'details'>
                    <h2>Name: {data?.Product.name}</h2>
                    <p>Description: {data?.Product.description}</p>
                </div>
            </ProductStyles>
        </Layout>
    );
};

/* Styles */
const ProductStyles = styled.section`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    gap: 2rem;
    align-items: top;
    justify-content: center;
    max-width: var(--maxWidth);

    & img {
        width: 100%;
        object-fit: contain;
    }
`;

export const getServerSideProps: GetServerSideProps = async ctx => {
    const productId = ctx.query.productId as string;

    const [ userQuery ] = await Promise.all([
        gql.ssrUser.getServerPage({}, ctx),
        gql.ssrProduct.getServerPage({ variables: { id: productId } }, ctx),
    ]);

    return userQuery;
};

export default withApollo(ProductPage);
