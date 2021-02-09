/* Components */
import { ErrorMessage } from '@/components';
import { Form } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';
import { useForm } from '@/helpers';

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = props => {
    const { inputs, handleChange, resetForm } = useForm({
        email:    '',
        password: '',
        token:    props.token,
    });

    const [
        resetPasswordMutation,
        resetPasswordMutationMeta,
    ] = gql.useResetPasswordMutation({
        variables:      inputs,
        refetchQueries: [{ query: gql.UserDocument }],
    });

    const resetPassword: React.FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();

        await resetPasswordMutation();
        resetForm();
    };

    const successfulError = resetPasswordMutationMeta.data
        ?.redeemUserPasswordResetToken?.code
        ? resetPasswordMutationMeta.data?.redeemUserPasswordResetToken
        : null;

    return (
        <Form method = 'POST' onSubmit = { resetPassword }>
            <h2>Reset Your Password</h2>

            <ErrorMessage
                error = { resetPasswordMutationMeta.error || successfulError }
            />

            <fieldset disabled = { resetPasswordMutationMeta.loading }>
                {resetPasswordMutationMeta.data
                    ?.redeemUserPasswordResetToken === null && (
                    <p>Success! You can now login.</p>
                )}

                <label htmlFor = 'email'>
                    Email
                    <input
                        autoComplete = 'email'
                        name = 'email'
                        placeholder = 'Your Email'
                        type = 'email'
                        value = { inputs.email }
                        onChange = { handleChange }
                    />
                </label>

                <label htmlFor = 'password'>
                    New Password
                    <input
                        autoComplete = 'password'
                        name = 'password'
                        placeholder = 'New Password'
                        type = 'password'
                        value = { inputs.password }
                        onChange = { handleChange }
                    />
                </label>
            </fieldset>

            <button type = 'submit'>Send</button>
        </Form>
    );
};

/* Types */
interface ResetPasswordFormProps {
    token: string;
}
