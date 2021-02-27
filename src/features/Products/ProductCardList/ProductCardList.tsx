/* Core */
import styled from 'styled-components';

/* Components */
import { ProductCard } from './ProductCard';

/* Instruments */
import * as gql from '@/graphql';

export const ProductCardList: React.FC<ProductCardList> = props => {
    const productsJSX = props.allProductsQuery.allProducts
        .filter(product => product)
        .map(product => {
            return <ProductCard key = { product?.id } product = { product } />;
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
interface ProductCardList {
    pageNumber: number;
    allProductsQuery: gql.AllProductsQuery;
}
