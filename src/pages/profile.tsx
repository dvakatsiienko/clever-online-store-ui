/* Core */
import { NextPage } from 'next';

/* Instruments */
import * as gql from '@/graphql';

const ProfilePage: NextPage = () => {
    const userQuery = gql.useUserQuery();

    return (
        <>
            <h1>Profile</h1>
            <h3>{userQuery.data?.authenticatedItem?.name}</h3>
        </>
    );
};

export default ProfilePage;
