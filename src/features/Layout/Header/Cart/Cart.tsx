/* Core */
import styled from 'styled-components';

/* Components */
import { CartStyles, Supreme, CloseButton } from '@/components/styled';
import { RemoveFromCart } from './RemoveFromCart';
import { Checkout } from './Checkout';

/* Instruments */
import * as gql from '@/graphql';
import { formatMoney, useCart } from '@/helpers';

export const Cart: React.FC = () => {
    const userQuery = gql.useUserQuery();
    const cartState = useCart();

    if (!userQuery.data?.authenticatedItem) {
        return null;
    }

    const cartItemsJSX = userQuery.data?.authenticatedItem.cart.map(
        cartItem => {
            return <CartItem cartItem = { cartItem } key = { cartItem.id } />;
        },
    );

    const totalCartPrice = formatMoney(
        calcTotalPrice(userQuery.data?.authenticatedItem.cart),
    );

    return (
        <CartStyles $open = { cartState.isCartOpen }>
            <header>
                <Supreme>
                    {userQuery.data.authenticatedItem.name}'s Cart
                </Supreme>

                <CloseButton onClick = { () => cartState.setCartOpen(false) }>
                    &times;
                </CloseButton>
            </header>

            <ul>{cartItemsJSX}</ul>

            <footer>
                <p>{totalCartPrice}</p>
                <Checkout />
            </footer>
        </CartStyles>
    );
};

const CartItem: React.FC<CartItemProps> = props => {
    const { product } = props.cartItem;

    if (!product) {
        return null;
    }

    const productTotalPrice = formatMoney(
        product.price * props.cartItem.quantity,
    );
    const singleProductPrice = formatMoney(product.price);

    return (
        <CartItemStyles>
            <img
                alt = { product.name }
                src = { product.photo.image.publicUrlTransformed }
                width = '100'
            />

            <div>
                <h3>{product.name}</h3>
                <p>
                    {productTotalPrice} -{' '}
                    <em>
                        {props.cartItem.quantity} &times; {singleProductPrice}
                    </em>
                </p>
            </div>

            <RemoveFromCart productId = { props.cartItem.id } />
        </CartItemStyles>
    );
};

/* Styles */
const CartItemStyles = styled.li`
    display: grid;
    padding: 1rem 0;
    border-bottom: 1px solid var(--lightGrey);
    grid-template-columns: auto 1fr auto;

    & img {
        margin-right: 1rem !important;
    }

    & h3,
    & p {
        margin: 0;
    }
`;

/* Helpers */
function calcTotalPrice(cart: gql.CartItem[]) {
    return cart.reduce((tally, cartItem) => {
        if (!cartItem.product) {
            return tally;
        }

        return tally + cartItem.quantity * cartItem.product.price;
    }, 0);
}

/* Types */
interface CartItemProps {
    cartItem: gql.CartItem;
}
