/* Core */
import { NextPage } from 'next';

/* Components */
import { Products } from '@/components';

const ProductsPage: NextPage = () => {
    return (
        <>
            <h1>Products</h1>
            <Products pageNumber = { 1 } />
        </>
    );
};

export default ProductsPage;
