export const DeleteProduct: React.FC<DeleteProductProps> = props => {
    return <button type = 'button'>{props.children}</button>;
};

/* Types */
interface DeleteProductProps {
    id: string;
}
