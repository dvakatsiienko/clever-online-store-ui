/* Core */
import { useRouter } from 'next/router';
import { NextPage } from 'next';

/* Components */
import { CreateProductForm } from '@/components';

/* Instruments */
import * as gql from '@/graphql';

const SellPage: NextPage = () => {
    const router = useRouter();
    const userQuery = gql.useUserQuery();

    if (!userQuery.data?.authenticatedItem) {
        if (process.browser) {
            router.replace('/login');
        }
        return null;
    }

    return <CreateProductForm />;
};

export default SellPage;
