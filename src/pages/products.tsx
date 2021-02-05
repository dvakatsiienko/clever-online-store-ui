/* Core */
import { NextPage } from 'next';

/* Components */
import { Products } from '../components';

const ProductsPage: NextPage = () => {
    return (
        <>
            <h1>Products page</h1>
            <Products />
        </>
    );
};

export default ProductsPage;
