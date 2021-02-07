/* Core */
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

/* Instruments */
import * as gql from '@/graphql';

/* Components */
import { ErrorMessage } from '@/components';

const ProductPage: NextPage = props => {
    const router = useRouter();
    const productId = router.query.productId as string;

    const productQuery = gql.useProductQuery({ variables: { ID: productId } });
    const { data: { Product } = { Product: {} } } = productQuery;

    console.log('LOADING....');
    console.log(productQuery.loading, productQuery.data);
    console.log(router.query, props);

    if (productQuery.loading) {
        return <p>Loading...</p>;
    }
    if (productQuery.error) {
        return <ErrorMessage error = { productQuery.error } />;
    }

    return (
        <ProductStyles>
            <Head>
                <title>Sick Fits | {Product.name}</title>
            </Head>

            <Image
                alt = { Product.name }
                height = { 300 }
                src = { Product.photo.image.publicUrlTransformed }
                width = { 300 }
            />

            <div className = 'details'>
                <h2>Name: {Product.name}</h2>
                <p>Description: {Product.description}</p>
            </div>
        </ProductStyles>
    );
};

/* Styles */
const ProductStyles = styled.section`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    max-width: var(--maxWidth);
    justify-content: center;
    align-items: top;
    gap: 2rem;

    & img {
        width: 100%;
        object-fit: contain;
    }
`;

export default ProductPage;
