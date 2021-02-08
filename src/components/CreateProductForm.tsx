/* Core  */
import { useRouter } from 'next/router';

/* Components */
import { ErrorMessage } from '@/components';
import { Form } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';
import { useForm } from '@/helpers';

export const CreateProductForm: React.FC = () => {
    const router = useRouter();
    const { inputs, handleChange, clearForm } = useForm({
        image:       null,
        name:        'Takahome shoes',
        price:       34150,
        description: 'The are the best shoes!',
    });

    const [
        createProductMutation,
        { loading, error },
    ] = gql.useCreateProductMutation({
        variables:      inputs,
        refetchQueries: [{ query: gql.ProductsDocument }],
    });

    const createProduct: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault();

        const response = await createProductMutation();
        clearForm();
        router.push(`/products/${response.data.createProduct.id}`);
    };

    return (
        <Form onSubmit = { createProduct }>
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
