/* Core */
import { NextPage } from 'next';
import { useRouter } from 'next/router';

/* Components */
import { UpdateProductForm } from '@/components';

/* Instruments */
import * as gql from '@/graphql';

const UpdatePage: NextPage = () => {
    const router = useRouter();
    const productId = router.query.productId as string;
    const userQuery = gql.useUserQuery();

    if (!userQuery.data?.authenticatedItem) {
        if (process.browser) {
            router.replace('/login');
        }
        return null;
    }

    return (
        <>
            <UpdateProductForm productId = { productId } />
        </>
    );
};

export default UpdatePage;
