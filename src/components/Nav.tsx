/* Core */
import Link from 'next/link';

/* Components */
import { LogoutButton } from '@/components';
import { NavStyles } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';
import { useCart } from '@/helpers';

export const Nav: React.FC = () => {
    const userQuery = gql.useUserQuery();
    const cartState = useCart();

    return (
        <NavStyles>
            <Link href = '/products'>Products</Link>

            {userQuery.data?.authenticatedItem && (
                <>
                    <Link href = '/sell'>Sell</Link>
                    <Link href = '/orders'>Orders</Link>
                    <Link href = '/account'>Account</Link>
                    <LogoutButton />
                    <button
                        type = 'button'
                        onClick = { () => cartState.setCartOpen(true) }
                    >
                        My Cart
                    </button>
                </>
            )}

            {!userQuery.data?.authenticatedItem && (
                <Link href = '/login'>Login</Link>
            )}
        </NavStyles>
    );
};
