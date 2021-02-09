/* Instruments */
import * as gql from '@/graphql';

export const User: React.FC = () => {
    const userQuery = gql.useUserQuery();

    return <section>{userQuery.data?.authenticatedItem?.name}</section>;
};
