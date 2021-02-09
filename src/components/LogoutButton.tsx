/* Instruments */
import * as gql from '@/graphql';

export const LogoutButton: React.FC = () => {
    const [ logoutMutation ] = gql.useLogoutMutation({
        refetchQueries: [{ query: gql.UserDocument }],
    });

    const logout = () => {
        logoutMutation();
    };

    return (
        <button type = 'button' onClick = { logout }>
            Logout
        </button>
    );
};
