/* Components */
import { ErrorMessage } from '@/components';
import { Form } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';
import { useForm } from '@/helpers';

export const UpdateProductForm: React.FC<UpdateProductFormProps> = props => {
    const productQuery = gql.useProductQuery({
        variables: { id: props.productId },
    });

    const { inputs, handleChange } = useForm(productQuery.data?.Product);

    const [
        updateProductMutation,
        updateProductMeta,
    ] = gql.useUpdateProductMutation({
        variables: {
            id:          props.productId,
            name:        inputs?.name,
            price:       inputs?.price,
            description: inputs?.description,
        },
        refetchQueries: [
            { query: gql.ProductDocument, variables: { id: props.productId } },
        ],
    });

    const updateProduct: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault();

        await updateProductMutation();
    };

    const isLoading = productQuery.loading || updateProductMeta.loading;

    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }

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
                        value = { inputs?.name }
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
                        value = { inputs?.price }
                        onChange = { handleChange }
                    />
                </label>

                <label htmlFor = 'description'>
                    Description
                    <textarea
                        id = 'description'
                        name = 'description'
                        placeholder = 'Description'
                        value = { inputs?.description }
                        onChange = { handleChange }
                    />
                </label>

                <button type = 'submit'>Update Product</button>
            </fieldset>
        </Form>
    );
};

/* Types */
interface UpdateProductFormProps {
    productId: string;
}
