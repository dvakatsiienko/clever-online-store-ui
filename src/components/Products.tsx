/* Core */
import styled from 'styled-components';

/* Components */
import { Product } from './Product';

/* Instruments */
import * as gql from '@/graphql';

export const Products = () => {
    const allProductsQuery = gql.useAll_Products_QueryQuery();

    if (allProductsQuery.loading) {
        return <p>Loading...</p>;
    }
    if (allProductsQuery.error) {
        return <p>Error: {allProductsQuery.error.message}</p>;
    }

    return (
        <div>
            <ProductsList>
                {allProductsQuery.data.allProducts.map(product => {
                    return <Product key = { product.id } product = { product } />;
                })}
            </ProductsList>
        </div>
    );
};

/* Styles */
const ProductsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
`;
