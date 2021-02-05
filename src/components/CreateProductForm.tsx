/* Instruments */
import { useForm } from '@/lib';

/* Components */
import { ErrorMessage } from '@/components';
import { Form } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';

export const CreateProductForm: React.FC<CreateProductFormProps> = () => {
    const { inputs, handleChange } = useForm({
        image:       null,
        name:        'Takahome shoes',
        price:       34150,
        description: 'The are the best shoes!',
    });

    const [
        createProductMutation,
        { loading, error },
    ] = gql.useCreate_Product_MutationMutation({
        variables: inputs,
    });

    const submit: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault();

        await createProductMutation();
    };

    return (
        <Form onSubmit = { submit }>
            <ErrorMessage error = { error } />

            <fieldset aria-busy = { loading } disabled = { loading }>
                <label htmlFor = 'image'>
                    Image
                    <input
                        id = 'image'
                        name = 'image'
                        type = 'file'
                        onChange = { handleChange }
                    />
                </label>

                <label htmlFor = 'name'>
                    Name
                    <input
                        id = 'name'
                        name = 'name'
                        placeholder = 'Name'
                        type = 'text'
                        value = { inputs.name }
                        onChange = { handleChange }
                    />
                </label>

                <label htmlFor = 'price'>
                    Price
                    <input
                        id = 'price'
                        name = 'price'
                        placeholder = 'Price'
                        type = 'number'
                        value = { inputs.price }
                        onChange = { handleChange }
                    />
                </label>

                <label htmlFor = 'description'>
                    Description
                    <textarea
                        id = 'description'
                        name = 'description'
                        placeholder = 'Description'
                        value = { inputs.description }
                        onChange = { handleChange }
                    />
                </label>

                <button type = 'submit'>+ Add Product</button>
            </fieldset>
        </Form>
    );
};

/* Types */
interface CreateProductFormProps {
    test?: boolean;
}
