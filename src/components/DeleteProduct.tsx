/* Instruments */
import * as gql from '@/graphql';

export const DeleteProduct: React.FC<DeleteProductProps> = props => {
    const [
        deleteProductMutation,
        deleteProductMutationMeta,
    ] = gql.useDeleteProductMutation({
        variables: { id: props.id },
        update(cache, payload) {
            cache.evict({ id: cache.identify(payload.data.deleteProduct) });
            cache.gc();
        },
    });

    const confirmDeleteProduct = () => {
        if (confirm('Are you sure that you want to delete this item?')) {
            deleteProductMutation();
        }
    };

    return (
        <button
            disabled = { deleteProductMutationMeta.loading }
            type = 'button'
            onClick = { confirmDeleteProduct }
        >
            {props.children}
        </button>
    );
};

/* Types */
interface DeleteProductProps {
    id: string;
}
