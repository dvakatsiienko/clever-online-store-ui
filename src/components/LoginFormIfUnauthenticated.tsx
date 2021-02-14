/* Components */
import { LoginForm } from '@/components/forms';

/* Instruments */
import * as gql from '@/graphql';

export const LoginFormIfUnauthenticated: React.FC = props => {
    const userQuery = gql.useUserQuery();

    if (!userQuery.data?.authenticatedItem) {
        return <LoginForm />;
    }

    return <>{props.children}</>;
};
