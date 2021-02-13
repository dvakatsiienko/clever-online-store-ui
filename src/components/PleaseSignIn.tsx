/* Components */
import { LoginForm } from '@/components/forms';

/* Instruments */
import * as gql from '@/graphql';

export const PleaseSignIn: React.FC = props => {
    const userQuery = gql.useUserQuery();

    console.log(userQuery.data?.authenticatedItem);

    if (!userQuery.data?.authenticatedItem) {
        return <LoginForm />;
    }

    return <>{props.children}</>;
};
