/* Components */
import { ErrorMessage } from '@/components';
import { Form } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';
import { useForm } from '@/helpers';

export const RequestPasswordRestForm: React.FC = () => {
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
    });

    const [
        requestResetPasswordMutation,
        requestResetPasswordMutationMeta,
    ] = gql.useRequestPasswordResetMutation({
        variables:      inputs,
        refetchQueries: [{ query: gql.UserDocument }],
    });

    const login: React.FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();

        await requestResetPasswordMutation();
        resetForm();
    };

    return (
        <Form method = 'POST' onSubmit = { login }>
            <h2>Request Password Reset</h2>

            <ErrorMessage error = { requestResetPasswordMutationMeta.error } />

            <fieldset disabled = { requestResetPasswordMutationMeta.loading }>
                {requestResetPasswordMutationMeta.data
                    ?.sendUserPasswordResetLink === null && (
                    <p>Success! Check you email for a link!</p>
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
            </fieldset>

            <button type = 'submit'>Send</button>
        </Form>
    );
};
