/* Core  */
import { useRouter } from 'next/router';

/* Components */
import { ErrorMessage } from '@/components';
import { Form } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';
import { useForm } from '@/lib';

export const UpdateProductForm: React.FC<UpdateProductFormProps> = props => {
    const router = useRouter();
    const { inputs, handleChange, clearForm } = useForm({
        image:       null,
        name:        'Takahome shoes',
        price:       34150,
        description: 'The are the best shoes!',
    });

    const productQuery = gql.useProductQuery({
        variables: { ID: props.productId },
    });
    const [
        updateProductMutation,
        updateProductMeta,
    ] = gql.useUpdateProductMutation({
        variables: { id: props.productId },
    });

    const updateProduct: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault();

        const response = await updateProductMutation();
        clearForm();
        router.push(`/products/${response.data.updateProduct.id}`);
    };

    const isLoading = productQuery.loading || updateProductMeta.loading;

    return (
        <Form onSubmit = { updateProduct }>
            <ErrorMessage
                error = { productQuery.error || updateProductMeta.error }
            />

            <fieldset aria-busy = { isLoading } disabled = { isLoading }>
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
interface UpdateProductFormProps {
    productId: string;
}
