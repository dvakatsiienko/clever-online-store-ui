/* Core */
import Link from 'next/link';

/* Components */
import { NavStyles } from '@/components/styled';
import { LogoutButton, CartCount } from '@/components';

/* Instruments */
import * as gql from '@/graphql';
import { useCart } from '@/helpers';

export const Nav: React.FC = () => {
    const userQuery = gql.useUserQuery();
    const cartState = useCart();

    const cartItemsQuantity = userQuery.data?.authenticatedItem?.cart.reduce(
        (tally, cartItem) => {
            return tally + cartItem.quantity;
        },
        0,
    );

    return (
        <NavStyles>
            <Link href = '/products'>Products</Link>

            {userQuery.data?.authenticatedItem && (
                <>
                    <Link href = '/sell'>Sell</Link>
                    <Link href = '/orders'>Orders</Link>
                    <Link href = '/account'>Account</Link>

                    <button
                        type = 'button'
                        onClick = { () => cartState.setCartOpen(true) }
                    >
                        My Cart
                        <CartCount count = { cartItemsQuantity } />
                    </button>

                    <LogoutButton />
                </>
            )}

            {!userQuery.data?.authenticatedItem && (
                <Link href = '/login'>Login</Link>
            )}
        </NavStyles>
    );
};
