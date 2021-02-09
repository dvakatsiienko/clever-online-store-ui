/* Components */
import { ErrorMessage } from '@/components';
import { Form } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';
import { useForm } from '@/helpers';

export const RegisterForm: React.FC = () => {
    const { inputs, handleChange, resetForm } = useForm({
        email:    '',
        name:     '',
        password: '',
    });

    const [ registerMutation, loginMutationMeta ] = gql.useRegisterMutation({
        variables:      inputs,
        refetchQueries: [{ query: gql.UserDocument }],
    });

    const login: React.FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();

        await registerMutation();
        resetForm();
    };

    return (
        <Form method = 'POST' onSubmit = { login }>
            <h2>Register</h2>

            <ErrorMessage error = { loginMutationMeta.error } />

            <fieldset>
                {loginMutationMeta.data?.createUser && (
                    <p>
                        Singed up with{' '}
                        {loginMutationMeta.data?.createUser.email} — Please go
                        ahead and Sign In
                    </p>
                )}

                <label htmlFor = 'name'>
                    Your Name
                    <input
                        autoComplete = 'name'
                        name = 'name'
                        placeholder = 'Your Name'
                        type = 'name'
                        value = { inputs.name }
                        onChange = { handleChange }
                    />
                </label>

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

            <button type = 'submit'>Register</button>
        </Form>
    );
};
