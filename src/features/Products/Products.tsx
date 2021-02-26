/* Core */
import styled from 'styled-components';

/* Components */
import { Product } from './Product';

/* Instruments */
import * as gql from '@/graphql';

export const Products: React.FC<PaginationProps> = props => {
    const productsJSX = props.allProductsQuery.allProducts
        .filter(product => product)
        .map(product => {
            return <Product key = { product?.id } product = { product } />;
        });

    return <ProductsList>{productsJSX}</ProductsList>;
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
    allProductsQuery: gql.AllProductsQuery;
}
