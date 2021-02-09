/* Core */
import Link from 'next/link';

/* Components */
import { LogoutButton } from '@/components';
import { NavStyles } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';

export const Nav: React.FC = () => {
    const userQuery = gql.useUserQuery();

    return (
        <NavStyles>
            <Link href = '/products'>Products</Link>

            {userQuery.data?.authenticatedItem && (
                <>
                    <Link href = '/sell'>Sell</Link>
                    <Link href = '/orders'>Orders</Link>
                    <Link href = '/account'>Account</Link>
                    <LogoutButton />
                </>
            )}

            {!userQuery.data?.authenticatedItem && (
                <Link href = '/login'>Login</Link>
            )}
        </NavStyles>
    );
};
