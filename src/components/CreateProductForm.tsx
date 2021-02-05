/* Instruments */
import { useForm } from '@/lib';

/* Components */
import { Form } from '@/components/styled';

export const CreateProductForm: React.FC<CreateProductFormProps> = () => {
    const { inputs, handleChange } = useForm({
        image:       '',
        name:        'Takahome shoes',
        price:       34150,
        description: 'The are the best shoes!',
    });

    const submit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();

        console.log(inputs);
    };

    return (
        <Form onSubmit = { submit }>
            <fieldset aria-busy disabled = { false }>
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
                        type = 'text'
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
interface CreateProductFormProps {}
