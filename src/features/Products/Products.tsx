/* Core */
import styled from 'styled-components';

/* Components */
import { Product } from './Product';
import { ErrorMessage } from '@/components';

/* Instruments */
import * as gql from '@/graphql';

const ITEMS_PER_PAGE = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE);

export const Products: React.FC<PaginationProps> = props => {
    const allProductsQuery = gql.useProductsQuery({
        variables: {
            first: ITEMS_PER_PAGE,
            skip:  props.pageNumber * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
        },
    });

    if (allProductsQuery.loading) {
        return <p>Loading...</p>;
    }
    if (allProductsQuery.error) {
        return <ErrorMessage error = { allProductsQuery.error } />;
    }

    const productsJSX = allProductsQuery.data?.allProducts
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
}
