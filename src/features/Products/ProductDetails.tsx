/* Core */
import styled from 'styled-components';

/* Instruments */
import * as gql from '@/graphql';

export const ProductDetails: React.FC<ProductDetailsProps> = props => {
    return (
        <ProductStyles>
            <img
                alt = { props.product?.photo.altText }
                src = { props.product?.photo.image.publicUrlTransformed }
            />

            <div className = 'details'>
                <h2>Name: {props.product?.name}</h2>
                <p>Description: {props.product?.description}</p>
            </div>
        </ProductStyles>
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

/* Types */
interface ProductDetailsProps {
    product: gql.Product;
}
