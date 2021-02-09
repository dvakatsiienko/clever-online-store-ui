/* Components */
import { ErrorMessage } from '@/components';
import { Form } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';
import { useForm } from '@/helpers';

export const LoginForm: React.FC<LoginFormProps> = () => {
    const { inputs, handleChange, resetForm } = useForm({
        email:    '',
        password: '',
    });

    const [ loginMutation, loginMutationMeta ] = gql.useLoginMutation({
        variables:      inputs,
        refetchQueries: [{ query: gql.UserDocument }],
    });

    const login: React.FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();

        await loginMutation();
        resetForm();
    };

    const error =
        loginMutationMeta.data?.authenticateUserWithPassword.__typename ===
        'UserAuthenticationWithPasswordFailure'
            ? loginMutationMeta.data?.authenticateUserWithPassword
            : null;

    console.log(error);

    return (
        <Form method = 'POST' onSubmit = { login }>
            <h2>Login Into Your Account</h2>

            <ErrorMessage error = { error } />

            <fieldset>
                <label htmlFor = 'email'>
                    Email
                    <input
                        autoComplete = 'email'
                        name = 'email'
                        placeholder = 'Your Email Address'
                        type = 'email'
                        value = { inputs.email }
                        onChange = { handleChange }
                    />
                </label>

                <label htmlFor = 'password'>
                    Password
                    <input
                        autoComplete = 'password'
                        name = 'password'
                        placeholder = 'Your Password'
                        type = 'password'
                        value = { inputs.password }
                        onChange = { handleChange }
                    />
                </label>
            </fieldset>

            <button type = 'submit'>Login</button>
        </Form>
    );
};

/* Types */
interface LoginFormProps {}
