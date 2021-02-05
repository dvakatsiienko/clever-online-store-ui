/* Core */
import Link from 'next/link';

/* Components */
import { NavStyles } from '@/components/styled';

export const Nav: React.FC = () => {
    return (
        <NavStyles>
            <Link href = '/products'>Products</Link>
            <Link href = '/sell'>Sell</Link>
            <Link href = '/orders'>Orders</Link>
            <Link href = '/account'>Account</Link>
        </NavStyles>
    );
};
