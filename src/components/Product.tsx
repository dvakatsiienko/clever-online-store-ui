/* Core */
import Link from 'next/link';

/* Components */
import { ItemStyles, Title, PriceTag } from './styled';

/* Instruments */
import * as gql from '@/graphql';
import { formatMoney } from '@/lib';

export const Product: React.FC<ProductProps> = props => {
    return (
        <ItemStyles>
            <img
                alt = { props.product.name }
                src = { props.product.photo.image?.publicUrlTransformed }
            />
            <Title>
                <Link href = { `/product/${props.product.id}` }>
                    {props.product.name}
                </Link>
            </Title>
            <PriceTag>{formatMoney(props.product.price)}</PriceTag>
            <p>{props.product.description}</p>
        </ItemStyles>
    );
};

/* Types */
interface ProductProps {
    product: gql.Product;
}
