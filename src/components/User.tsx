/* Instruments */
import * as gql from '@/graphql';

export const User: React.FC = () => {
    const userQuery = gql.useUserQuery();

    return <h1>{userQuery.data?.authenticatedItem?.name}</h1>;
};
