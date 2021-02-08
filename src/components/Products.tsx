/* Core */
import styled from 'styled-components';

/* Components */
import { Product } from './Product';

/* Instruments */
import * as gql from '@/graphql';
import { perPage } from '@/../config';

export const Products: React.FC<PaginationProps> = props => {
    const allProductsQuery = gql.useProductsQuery({
        variables: {
            first: perPage,
            skip:  props.pageNumber * perPage - perPage,
        },
    });

    if (allProductsQuery.loading) {
        return <p>Loading...</p>;
    }
    if (allProductsQuery.error) {
        return <p>Error: {allProductsQuery.error.message}</p>;
    }

    const productsJSX = allProductsQuery.data?.allProducts
        .filter(product => product)
        .map(product => {
            return <Product key = { product?.id } product = { product } />;
        });

    return (
        <div>
            <ProductsList>{productsJSX}</ProductsList>
        </div>
    );
};

/* Styles */
const ProductsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
`;

/* Types */
interface PaginationProps {
    pageNumber: number;
}
