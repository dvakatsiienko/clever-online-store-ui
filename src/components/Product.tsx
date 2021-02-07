/* Core */
import Link from 'next/link';

/* Components */
import { DeleteProduct } from './DeleteProduct';
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
            <div className = 'buttonList'>
                <Link
                    href = {{
                        pathname: '/update',
                        query:    {
                            productId: props.product.id,
                        },
                    }}
                >
                    Edit ✏️
                </Link>
                <DeleteProduct id = { props.product.id }>Delete</DeleteProduct>
            </div>
        </ItemStyles>
    );
};

/* Types */
interface ProductProps {
    product: gql.ProductFragment;
}
